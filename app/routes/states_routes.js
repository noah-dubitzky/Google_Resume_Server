module.exports = app => {
    const states = require("../controllers/states_controller.js");

    app.get("/states/:stateName", states.findStateByName);
  
  };