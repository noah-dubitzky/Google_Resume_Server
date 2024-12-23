module.exports = app => {
    const email_list = require("../controllers/email_list_controller.js");
  
    // Create a new Customer
    app.post("/email_list", email_list.create);

    app.get("/email_list/", email_list.findAll);
  
  };