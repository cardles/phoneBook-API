const express = require("express");
const router = express.Router();
const controller = require("../controller/phonebook.controller");

router.get("/home", controller.getHome);
router.get("/contacts", controller.getAll);
router.get("/contacts/name", controller.getByName);
router.get("/contact/:id", controller.getById);
router.post("/contact/add", controller.postNewContact);
router.delete("/contact/dell/:id", controller.dellById);

module.exports = router;