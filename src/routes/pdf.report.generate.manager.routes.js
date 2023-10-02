const express = require("express");
const router = express.Router();

const { generatePdf } = require("../api/pdf.report.generate.manager.api");

/**
 * @Method {get}
 * @Route api/reportManager/
 * @Description Genaratw PDF Report
 */
router.get("/", generatePdf);

module.exports = router;
