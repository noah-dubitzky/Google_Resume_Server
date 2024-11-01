module.exports = app => {
    const companies = require("../controllers/companies_controller.js");
  
    // Create a new Customer
    app.post("/companies", companies.create);

    app.get("/companies/:company_name", companies.findCompany);
  
  };