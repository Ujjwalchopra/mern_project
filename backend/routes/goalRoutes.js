const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const {
  getgoals,
  setgoals,
  updategoals,
  deletegoals,
} = require("../controller/goalController");

const {protect}= require('../Middleware/authMiddleware')

router.get("/",protect, getgoals);

router.post("/",protect, setgoals);

router.put("/:id",protect, updategoals);

router.delete("/:id",protect, deletegoals);

module.exports = router;
