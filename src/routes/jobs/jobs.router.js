const express = require('express');

const { jobsController } = require("./jobs.controller");

const router = express.Router();

router.get("", jobsController);

module.exports = {
  jobsRouter: router
}


const app = express();
app.post('/test', function (req, res) {
  console.log(req.body)
})