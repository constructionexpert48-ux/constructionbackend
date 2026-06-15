const express = require('express');
const router = express.Router();

const {
  approveRequest,
  rejectRequest,
  getPendingRequests,
  adminLogin
} = require("../controllers/admin.controller.js");

const auth = require("../middleware/auth.js");
const isAdmin = require("../middleware/isAdmin.js");

// ✅ Public route
router.post("/login", adminLogin);

// ✅ Protected routes
router.use(auth, isAdmin);

router.get("/pending", getPendingRequests);
router.put("/approve/:type/:id", approveRequest);
router.put("/reject/:type/:id", rejectRequest);

module.exports = router;