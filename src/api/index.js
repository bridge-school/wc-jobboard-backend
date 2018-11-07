const express = require("express");

const { healthRouter } = require('../routes/health/health.router')
const { jobsRouter } = require('../routes/jobs/jobs.router')

const router = express.Router();
router.use("/health", healthRouter);


router.use("/jobs", jobsRouter);

module.exports = router;
