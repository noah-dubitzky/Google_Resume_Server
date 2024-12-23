const Email_List = require("../models/email_list.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a company
  const email = new Email_List({
    address: req.body.address,
    timestamp: req.body.timestamp
  });

  // Save company in the database
  Email_List.create(email, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the email."
      });
    else res.send(data);
  });
  
};

exports.findAll = (req, res) => {
  Email_List.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving emails."
      });
    else res.send(data);
  });
};