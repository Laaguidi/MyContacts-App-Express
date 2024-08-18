const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get all contacts"})
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    res.status(201).json({message: "Create Contact"})
});


//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
 const deleteContact = asyncHandler(async (req, res) => {
     res.status(201).json({message: `Delete contact for ${req.params.id}`})
 });

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
