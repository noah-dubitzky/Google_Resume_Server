module.exports = app => {
    const admins = require("../controllers/admins_controller.js");
  
    // Create a new Customer
    app.post("/admin", admins.create);

    app.get("/admin/:username/:password", admins.findAdmin);
  
  };