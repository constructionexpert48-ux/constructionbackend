const { verifyAccess } = require('../utils/jwt');

function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    req.user = verifyAccess(token);
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid/expired token' });
  }
}

module.exports = auth;
