const express = require("express");
const router = express.Router();

const { saveMessage, markAsRead } = require("../api/message.api");

/**
 * @Method {POST}
 * @Route api/message/
 * @Description Save message by customer
 */
router.post("/", saveMessage);

/**
 * @Method {DELETE}
 * @Route api/message/
 * @Description Mark as Read message by admin
 */
router.delete("/:id", markAsRead);

module.exports = router;
