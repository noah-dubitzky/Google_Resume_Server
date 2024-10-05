const sql = require("./db.js");

// constructor
const Message = function(message) {
  this.personID = message.personID;
  this.content = message.content;
  this.date = message.date;
};

Message.create = (newMessage, result) => {
  sql.query("INSERT INTO messages SET ?", newMessage, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created message: ", { id: res.insertId, ...newMessage });
    result(null, { id: res.insertId, ...newMessage });
  });
};

/*
Message.findById = (messageId, result) => {
  sql.query(`select * from messages where users.id=${userId}`, (err, res) => {
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
*/

Message.getAllMessagesAndSenders = result => {
  sql.query("SELECT * from messages, persons where messages.PersonID=persons.PersonID;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("senders: ", res);
    result(null, res);
  });
};


Message.findBySender = (PersonID, result) => {
  sql.query(`select * from messages where messages.PersonID='${PersonID}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found data: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};



Message.getAllSenders = result => {
  sql.query("SELECT DISTINCT First_Name, Last_Name, Email, persons.PersonID FROM messages, persons where messages.PersonID=persons.PersonID;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("senders: ", res);
    result(null, res);
  });
};

/*

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET email = ?, fName = ?, lName = ?, PWord = ? WHERE id = ?",
    [user.email, user.first_name, user.last_name, user.password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

*/

module.exports = Message;