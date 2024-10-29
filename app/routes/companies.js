// routes/companies.js
module.exports = app => {
    const company = require("../controllers/companyController.js");
  
    // Create a new Customer
    app.post("/company", company.create);
  
  };