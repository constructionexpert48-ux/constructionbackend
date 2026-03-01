// upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const baseDir = path.join(__dirname, '..');
fs.mkdirSync(baseDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, baseDir),
  filename: (_req, file, cb) => {
    const ts = Date.now();
    const ext = path.extname(file.originalname || '.jpg').toLowerCase();
    cb(null, `${ts}-${Math.random().toString(36).slice(2)}${ext}`);
  }
});

const fileFilter = (_req, file, cb) => {
  const ok = /image\/(jpeg|jpg|png|webp)/.test(file.mimetype);
  cb(ok ? null : new Error('Only image files are allowed'), ok);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Export **directly the function** instead of an object
module.exports = upload.fields([
  { name: 'aadhaarFront', maxCount: 1 },
  { name: 'aadhaarBack',  maxCount: 1 },
  { name: 'panCardImage', maxCount: 1 },
  { name: 'selfPhoto',    maxCount: 1 }
]);
