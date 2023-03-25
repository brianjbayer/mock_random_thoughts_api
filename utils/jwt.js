// --- CUSTOM JWT Utilities ---

const extractToken = function extractToken(req) { return req.headers.authorization.split(' ')[1]; };

// Secret used to generate random_thoughts_api secret on jwt.io
// 3e7be82a5279ac9042b7f3977ae4dd7d397d24b294bc9e0cc17c0cfe9f2529c6a492a8374271802b4df96c337bab3dacff3c1e8ce1459ce7e50b93943ca4035a
const jwt = function jwt() {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJyYW5kb21fdGhvdWdodHNfYXBpIiwiaXNzIjoiYXV0aGVudGljYXRpb24iLCJleHAiOjUxNzUyNzM2MDAwMDAsInVzZXIiOjk5OTk5OSwiYXV0aCI6LTkyMjMzNzIwMzY4NTQ3NzYwMDB9.SRff-Br7dZmIvoW0amLFaL6SO9_ISJwOy20ls2l6jEY';
};

const validJwt = function validJwt(token) { return token === jwt(); };

module.exports = { extractToken, jwt, validJwt };
