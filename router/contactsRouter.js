const express = require("express");

const auth = require("../middlewares/auth");

const {
  getContacts,
  addContact,
  // getBookById,
  removeContact,
  // updateBookById,
  // upadateReadStatus,
} = require("../controllers/contactsControllers");
const {
  contactValidation,
  // putValidation,
  // patchValidation,
} = require("../middlewares/contactsValidation");

const contactsRouter = express.Router();

contactsRouter.get("/", auth, getContacts);

// contactsRouter.get("/", auth, getBooks);

// contactsRouter.get("/:bookId", auth, getBookById);

contactsRouter.post("/", auth, contactValidation, addContact);

contactsRouter.delete("/:contactId", auth, removeContact);

// contactsRouter.put("/:bookId", auth, putValidation, updateBookById);

// contactsRouter.patch("/:bookId/isRead", auth, patchValidation, upadateReadStatus);

module.exports = contactsRouter;
