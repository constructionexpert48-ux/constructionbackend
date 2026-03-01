const crypto = require('crypto');
const keyHex = process.env.PII_ENC_KEY_HEX;
if (!keyHex) console.warn('PII_ENC_KEY_HEX not set — Aadhaar/PAN will be stored as plain if you don’t use encrypt()');

const key = keyHex ? Buffer.from(keyHex, 'hex') : null; // 32 bytes for AES-256

function encrypt(plain) { 
  if (!key) return plain; // fallback (not recommended)
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}:${tag.toString('hex')}:${ciphertext.toString('hex')}`;
}

module.exports = { encrypt };
