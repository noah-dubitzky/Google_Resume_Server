const sql = require("./db.js");

// constructor
const States = function() {
  
};

States.findByName = (stateName, result) => {
  sql.query(`select * from states where states.state_name='${stateName}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found data: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found state with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = States;