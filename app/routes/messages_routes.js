module.exports = app => {
    const messages = require("../controllers/messages_controller.js");
  
    // Create a new Customer
    app.post("/message", messages.create);

    app.get("/message/:PersonID", messages.findMessage);

    app.get("/senders", messages.findAllSenders);

    app.get("/sendersmessages", messages.findAllMessagesAndSenders);
  
  };