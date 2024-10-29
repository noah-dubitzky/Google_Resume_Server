const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");


// Create a connection to the database
const connection = mysql.createConnection({
 	host: dbConfig.host,
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database,
	port: dbConfig.port
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database on port " + dbConfig.port);
});

module.exports = connection;
