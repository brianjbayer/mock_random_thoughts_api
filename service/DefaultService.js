const jwtUtils = require('../utils/jwt');
const randomThoughtUtils = require('../utils/random_thoughts');
const userUtils = require('../utils/users');

// --- CUSTOM Services ---

// Health Check Endpoints
exports.livezGET = function () {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      status: 200,
      message: 'alive',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

exports.readyzGET = function () {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      status: 200,
      message: 'ready',
      database_connection: 'ok',
      database_migrations: 'ok',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

// --- Swagger Generated API Services ---
/**
 * logout user
 *
 * returns logout_response
 * */
exports.v1LoginDELETE = function () {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      message: 'message',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * login user
 *
 * body Login  (optional)
 * returns login_response
 * */
exports.v1LoginPOST = function (body) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      // CUSTOM Response
      message: 'User logged in successfully',
      token: jwtUtils.jwt(),
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * list random_thoughts
 *
 * page Integer page number (optional)
 * name String user name (optional)
 * returns paginated_random_thoughts
 * */
exports.v1Random_thoughtsGET = function (page, name) {
  return new Promise((resolve, reject) => {
    // CUSTOM Retrieve any created Random Thoughts (or a default)
    const randomThought = randomThoughtUtils.popRandomThought();
    const examples = {};
    examples['application/json'] = {
      data: [{
        thought: randomThought.thought,
        mood: randomThought.mood,
        name: randomThought.name,
        id: randomThought.id,
      }, {
        thought: 'thought',
        mood: 'mood',
        name: 'name',
        id: 0,
      }],
      meta: {
        next_page: 2,
        total_count: 2,
        total_pages: 2,
        prev_page: null,
        current_page: 1,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * delete random_thought
 *
 * id String id
 * returns random_thought_response
 * */
exports.v1Random_thoughtsIdDELETE = function (id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      thought: 'thought',
      mood: 'mood',
      name: 'name',
      id: 0,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * show random_thought
 *
 * id String id
 * returns random_thought_response
 * */
exports.v1Random_thoughtsIdGET = function (id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      thought: 'thought',
      mood: 'mood',
      name: 'name',
      id: 0,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * update random_thought
 *
 * body Update_random_thought  (optional)
 * id String id
 * returns random_thought_response
 * */
exports.v1Random_thoughtsIdPATCH = function (body, id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      thought: 'thought',
      mood: 'mood',
      name: 'name',
      id: 0,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * create random_thought
 *
 * body Create_random_thought  (optional)
 * returns random_thought_response
 * */
exports.v1Random_thoughtsPOST = function (body) {
  return new Promise((resolve, reject) => {
    // CUSTOM Store any created Random Thoughts for later listing
    const randomThought = body.random_thought;
    const user = userUtils.popUser();
    randomThought.id = 0;
    randomThought.name = user.display_name;
    randomThoughtUtils.pushRandomThought(randomThought);
    const examples = {};
    examples['application/json'] = {
      thought: randomThought.thought,
      mood: randomThought.mood,
      name: randomThought.name,
      id: randomThought.id,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * list users
 *
 * page Integer page number (optional)
 * returns paginated_users
 * */
exports.v1UsersGET = function (page) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      data: [{
        id: 0,
        display_name: 'display_name',
        email: 'email',
      }, {
        id: 0,
        display_name: 'display_name',
        email: 'email',
      }],
      meta: {
        next_page: 1,
        total_count: 2,
        total_pages: 5,
        prev_page: 5,
        current_page: 6,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * delete user
 *
 * id String id
 * returns same_user_response
 * */
exports.v1UsersIdDELETE = function (id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      id: 0,
      display_name: 'display_name',
      email: 'email',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * show user
 *
 * id String id
 * returns inline_response_200
 * */
exports.v1UsersIdGET = function (id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = '';
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * update user
 *
 * body Update_user  (optional)
 * id String id
 * returns same_user_response
 * */
exports.v1UsersIdPATCH = function (body, id) {
  return new Promise((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      id: 0,
      display_name: 'display_name',
      email: 'email',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * create user
 *
 * body Create_user  (optional)
 * returns same_user_response
 * */
exports.v1UsersPOST = function (body) {
  return new Promise((resolve, reject) => {
    // CUSTOM Create User Response and store any created user
    // for later use when creating random thought (name)
    const user = body.user;
    user.id = 0;
    userUtils.pushUser(user);
    const examples = {};
    examples['application/json'] = {
      id: user.id,
      display_name: user.display_name,
      email: user.email,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
