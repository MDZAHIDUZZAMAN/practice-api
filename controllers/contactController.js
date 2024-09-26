const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route Get /api/contacts/:id
//@access public

const getContacts = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: "Get all contact" });
});

//module.exports = {getContact};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create all contact" });
});
//@desc Get all contacts
//@route Get /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json(`Get contact for ${req.params.id}`);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const UpdateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  UpdateContact,
  deleteContact,
};
