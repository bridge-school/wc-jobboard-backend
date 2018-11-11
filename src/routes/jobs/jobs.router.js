const express = require('express');
const { jobsController } = require("./jobs.controller");

const router = express.Router();

router.get("", jobsController);
router.post("", (req, res) => {
  console.log(req.body);
  res.send({
    ok: "ok"
  });
});

module.exports = {
  jobsRouter: router
}


