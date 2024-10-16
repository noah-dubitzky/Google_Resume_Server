module.exports = app => {
    const email = require("../controllers/email_controller.js");
  
    // Create a new Customer
    app.post("/email", email.create);
  
  };