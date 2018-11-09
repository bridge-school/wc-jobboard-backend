const express = require('express');
const { jobsController } = require("./jobs.controller");
const bodyParser = require("body-parser");
const router = express.Router();


router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.get("", jobsController);
router.post("/post-a-job", (req, res) => {
  res.send({
    'ok': req.body
  });
});

module.exports = {
  jobsRouter: router
}


