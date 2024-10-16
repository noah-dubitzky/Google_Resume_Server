module.exports = app => {
    const persons = require("../controllers/persons_controller.js");
  
    // Create a new Customer
    app.post("/person", persons.create);

    app.get("/person/:personEM", persons.findPerson);
  
  };