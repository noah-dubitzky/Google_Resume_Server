const sql = require("./db.js");

// constructor
const Sender = function(sender) {
  this.name = sender.name;
  this.email = sender.email;
  this.number = sender.number;
  this.state_id = sender.state_id;
  this.company_id = sender.company_id;
};

Sender.create = (newsender, result) => {
  sql.query("INSERT INTO senders SET ?", newsender, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created sender: ", { id: res.insertId, ...newsender });
    result(null, { id: res.insertId, ...newsender });
  });
};

Sender.findByInfo = (senderName, result) => {
  sql.query(`select * from senders where senders.name='${senderName}'`, (err, res) => {
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

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Sender.getAll = result => {
  sql.query("SELECT * FROM senders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("senders: ", res);
    result(null, res);
  });
};

module.exports = Sender;