const express = require("express");
const router = express.Router();
const { karyawanController } = require("../controllers");

router.get("/", karyawanController.getData);
router.post("/add-data", karyawanController.addData);
router.patch("/edit-karyawan/:id", karyawanController.editData);
router.delete("/:idkaryawan", karyawanController.deleteData);

module.exports = router;
