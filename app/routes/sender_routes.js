module.exports = app => {
    const senders = require("../controllers/senders_controller.js");
  
    // Create a new Customer
    app.post("/sender", senders.create);

    app.get("/senders/", senders.findAll);

    app.get("/sender/:senderName", senders.findSender);
  
  };