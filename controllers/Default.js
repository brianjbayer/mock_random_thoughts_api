const utils = require('../utils/writer.js');
const Default = require('../service/DefaultService');

// --- CUSTOM REQUIRES ---
const jwtUtils = require('../utils/jwt');

// --- CUSTOM Endpoints ---
// Health Check Endpoints
module.exports.livezGET = function livezGET(req, res, next) {
  Default.livezGET()
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.readyzGET = function readyzGET(req, res, next) {
  Default.readyzGET()
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

// --- Swagger Generated API Endpoints ---
module.exports.v1LoginDELETE = function v1LoginDELETE(req, res, next) {
  Default.v1LoginDELETE()
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1LoginPOST = function v1LoginPOST(req, res, next, body) {
  Default.v1LoginPOST(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1Random_thoughtsGET = function v1Random_thoughtsGET(req, res, next, page, name) {
  Default.v1Random_thoughtsGET(page, name)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1Random_thoughtsIdDELETE = function v1Random_thoughtsIdDELETE(req, res, next, id) {
  Default.v1Random_thoughtsIdDELETE(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1Random_thoughtsIdGET = function v1Random_thoughtsIdGET(req, res, next, id) {
  Default.v1Random_thoughtsIdGET(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1Random_thoughtsIdPATCH = function v1Random_thoughtsIdPATCH(req, res, next, body, id) {
  Default.v1Random_thoughtsIdPATCH(body, id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1Random_thoughtsPOST = function v1Random_thoughtsPOST(req, res, next, body) {
  // CUSTOM Verify token is JWT from Login
  const token = jwtUtils.extractToken(req);
  if (jwtUtils.validJwt(token)) {
    Default.v1Random_thoughtsPOST(body)
      .then((response) => {
        utils.writeJson(res, response, 201);
      })
      .catch((response) => {
        utils.writeJson(res, response);
      });
  } else {
    utils.writeJson(res, { error: 'MOCK: JWT DOES NOT MATCH' }, 401);
  }
};

module.exports.v1UsersGET = function v1UsersGET(req, res, next, page) {
  Default.v1UsersGET(page)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersIdDELETE = function v1UsersIdDELETE(req, res, next, id) {
  Default.v1UsersIdDELETE(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersIdGET = function v1UsersIdGET(req, res, next, id) {
  Default.v1UsersIdGET(id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersIdPATCH = function v1UsersIdPATCH(req, res, next, body, id) {
  Default.v1UsersIdPATCH(body, id)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.v1UsersPOST = function v1UsersPOST(req, res, next, body) {
  Default.v1UsersPOST(body)
    .then((response) => {
      utils.writeJson(res, response, 201);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
