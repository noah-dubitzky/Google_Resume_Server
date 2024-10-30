const Sender = require("../models/senders.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a sender
  const sender = new Sender({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    state_id: req.body.state_id,
    company_id: req.body.company_id
  });

  // Save sender in the database
  Sender.create(sender, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the sender."
      });
    else res.send(data);
  });
  
};

exports.findAll = (req, res) => {
  Sender.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

exports.findSender = (req, res) => {
  Sender.findByInfo(req.params.senderName, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found sender with email ${req.params.senderName}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving sender with email " + req.params.senderEM
        });
      }
    } else res.send(data);
  });
};