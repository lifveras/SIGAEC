const express = require("express");
const eventoacademico = require("../controllers/eventoacademico.controller.js");

const router = express.Router();

router.post("/eventoacademico", eventoacademico.create);
router.get("/eventoacademico", eventoacademico.getAll);
router.get("/eventoacademico/:id", eventoacademico.getById);
router.put("/eventoacademico/:id", eventoacademico.alterById);
router.delete("/eventoacademico/:id", eventoacademico.deleteById);

module.exports = router;
