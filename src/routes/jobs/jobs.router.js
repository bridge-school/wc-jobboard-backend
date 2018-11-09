const express = require('express');
const { jobsController } = require("./jobs.controller");
const router = express.Router();
const db = require("../../utils/database.js");

router.get("", jobsController);
router.post("", (req, res) => {
  const formData = req.body;
  console.log(req.body);
  db.collection("jobs").add({
    formData,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  // res.send({
  //   'ok': req.body
  // });
});

module.exports = {
  jobsRouter: router,
};
