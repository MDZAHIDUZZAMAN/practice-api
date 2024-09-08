//@desc Get all contacts
//@route Get /api/contacts/:id
//@access public 
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contact"});
     };

     //module.exports = {getContact};

//@desc Create new contact
//@route POST /api/contacts
//@access public 
const createContact = (req, res) => {
res.status(201).json({message: "Create all contact"});
     };
//@desc Get all contacts
//@route Get /api/contacts/:id
//@access public 
const getContact = (req, res) => {
res.status(200).json(`Get contact for ${req.params.id}`);
     };

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public 
const UpdateContact = (req, res) => {
res.status(200).json({message: `Update contact for ${req.params.id}`});
    };

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = (req, res) => {
res.status(200).json({message: `Delete contact for ${req.params.id}`});
        };

     module.exports = {
        getContacts, 
        createContact, 
        getContact,  
        UpdateContact, 
        deleteContact
    };