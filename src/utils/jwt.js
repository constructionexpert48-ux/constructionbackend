const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const signAccess = (payload) => jwt.sign(payload, SECRET, { expiresIn: '12h' });
const verifyAccess = (token) => jwt.verify(token, SECRET);

module.exports = { signAccess, verifyAccess };
