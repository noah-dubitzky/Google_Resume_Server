module.exports = app => {
    const messages = require("../controllers/messages_controller.js");
  
    // Create a new Customer
    app.post("/message", messages.create);

    app.get("/message/:sender_id", messages.findMessage);
  
  };