const sql = require("./db.js");

// constructor
const Email_List = function(email) {
  this.address = email.address;
};

Email_List.create = (newemail, result) => {
    sql.query("INSERT INTO emails SET ?", newemail, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created email: ", { id: res.insertId, ...newemail });
      result(null, { id: res.insertId, ...newemail });
    });
  };

Email_List.getAll = result => {
  sql.query("SELECT * from emails", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("senders: ", res);
    result(null, res);
  });
};

module.exports = Email_List;