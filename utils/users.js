// --- CUSTOM Users Storage/Retrieval Utilities ---

const defaultUser = {
  email: 'email', display_name: 'display_name', id: 0,
};

const users = [];

const pushUser = function pushUser(user) {
  users.push(user);
};

const popUser = function popUser() {
  const user = users.pop();
  return user || defaultUser;
};

module.exports = { pushUser, popUser };
