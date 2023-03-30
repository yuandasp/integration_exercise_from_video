const mysql2 = require("mysql2");
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "yuanda123",
  database: "db_kantor",
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.log("error : ", err.message);
  }
  console.log("Connected to MySQL Server");
});

module.exports = { db };
