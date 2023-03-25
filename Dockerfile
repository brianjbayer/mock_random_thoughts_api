#-----------------------------------
#--- mock_random_thoughts_api ---
#-----------------------------------
# Build and Run deployment image
# docker build --no-cache -t rta-mock .
# docker run -it --rm -p 3000:3000 rta-mock

# Build and Run development environment image
# docker build --no-cache --target devenv -t rta-mock-dev .
# docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 rta-mock-dev

#--- Base Image ---
ARG BASE_IMAGE=node:19-alpine3.16
FROM ${BASE_IMAGE} AS node-alpine

#--- Base Builder Stage ---
FROM node-alpine AS base-builder

# Create app directory
WORKDIR /usr/src/app

# Copy the package.json/package-lock.json files
COPY package*.json ./

#--- Dev Builder Stage ---
FROM base-builder AS dev-builder

# Set the working directory
WORKDIR /usr/src/app

# Build the application for development/test
RUN npm ci

#--- Dev Environment ---
# ASSUME source is docker volumed into the image
FROM dev-builder AS devenv

# For Dev Env, add git and vim at least
ARG DEVENV_PACKAGES='git vim'
RUN apk --update add ${DEVENV_PACKAGES}

# Set the working directory
WORKDIR /usr/src/app

# Start devenv in (command line) shell
CMD sh

#--- Deploy Builder Stage ---
FROM base-builder AS deploy-builder

# Set the working directory
WORKDIR /usr/src/app

# Build the application for production
RUN npm ci --only=production

#--- Deploy Stages ---
FROM node-alpine AS deploy

# Add a user so not running as root
RUN adduser -D deployer

# Run as deployer USER instead of as root
USER deployer

# Set the working directory
WORKDIR /usr/src/app

# Copy over the built packages
COPY --from=deploy-builder --chown=deployer /usr/src/app/node_modules ./node_modules

# NOTE: This currently runs from the source code, so copy it over
COPY --chown=deployer . /usr/src/app/

# Run the mock server
CMD [ "npm", "start" ]
