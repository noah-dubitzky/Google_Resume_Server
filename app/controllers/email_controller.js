const Email = require("../models/email.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create an email
  const email = new Email({
    service: req.body.service,
    user: req.body.user,
    password: req.body.password,
    sender: req.body.sender,
    recipient: req.body.recipient,
    subject: req.body.subject,
    text: req.body.text
  });

  // send email
  Email.send(email, (err, data) => {
    if (err)
      res.send({
        message:
          err.message || "problems with the firewall came up on noooo!"
      });
    else res.send(data);
  });
   
};