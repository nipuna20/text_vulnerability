const express = require("express");
const router = express.Router();

const { getAdminDashBoarddData } = require("../api/dashboard.api");

/**
 * @Method {get}
 * @Route api/dashboard/
 * @Description get dashboard services by admin
 */
router.get("/", getAdminDashBoarddData);

module.exports = router;
