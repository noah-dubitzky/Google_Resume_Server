const sql = require("./db.js");

// constructor
const Companies = function(company) {
  this.companyName = company.name;
};

Companies.create = (newcompany, result) => {
    sql.query("INSERT INTO companies SET ?", newcompany, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created company: ", { id: res.insertId, ...newcompany });
      result(null, { id: res.insertId, ...newcompany });
    });
  };

Companies.findByName = (companyName, result) => {
  sql.query(`select * from companies where companies.state_name='${companyName}'`, (err, res) => {
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

    // not found company with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = Companies;