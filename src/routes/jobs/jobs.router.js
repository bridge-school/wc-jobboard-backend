const express = require('express');

const { jobsController } = require("./jobs.controller");

const router = express.Router();

router.get("", jobsController);

module.exports = {
  jobsRouter: router
}
