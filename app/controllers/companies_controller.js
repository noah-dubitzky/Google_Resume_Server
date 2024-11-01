const Company = require("../models/companies.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a company
  const company = new Company({
    name: req.body.company_name,
  });

  // Save company in the database
  Company.create(company, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the company."
      });
    else res.send(data);
  });
  
};

exports.findCompany = (req, res) => {
  Company.findByName(req.params.company_name, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found company with email ${req.params.company_name}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving company with email " + req.params.company_name
        });
      }
    } else res.send(data);
  });
};