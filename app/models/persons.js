const sql = require("./db.js");

// constructor
const Person = function(person) {
  this.First_Name = person.First_Name;
  this.Last_Name = person.Last_Name;
  this.Email = person.Email;
};

Person.create = (newPerson, result) => {
  sql.query("INSERT INTO persons SET ?", newPerson, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created person: ", { id: res.insertId, ...newPerson });
    result(null, { id: res.insertId, ...newPerson });
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

Person.findByInfo = (personEM, result) => {
  sql.query(`select * from persons where persons.Email='${personEM}'`, (err, res) => {
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

/*

Message.getAll = result => {
  sql.query("SELECT * FROM messages", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("messages: ", res);
    result(null, res);
  });
};
*/

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

module.exports = Person;