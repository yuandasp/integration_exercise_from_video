const { db } = require("../database");

module.exports = {
  getData: (req, res) => {
    let scriptQuery = `SELECT * FROM karyawan;`;
    if (req.query.idkaryawan) {
      scriptQuery = `SELECT * FROM karyawan WHERE idkaryawan=${db.escape(
        req.query.idkaryawan
      )};`;
    }
    db.query(scriptQuery, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(results);
    });
  },
  addData: (req, res) => {
    //   console.log(req.body);
    const { nama, usia, berat, kota, email, tahun, idposisi } = req.body;
    let insertQuery = `INSERT INTO karyawan VALUES (null,${db.escape(
      nama
    )},${db.escape(usia)},${db.escape(berat)},${db.escape(kota)},${db.escape(
      email
    )},${db.escape(tahun)},${db.escape(idposisi)});`;
    //   console.log(insertQuery, "insert");

    db.query(insertQuery, (err, results) => {
      if (err) return res.status(500).send(err);

      db.query(`SELECT * FROM karyawan;`, (err, results2) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results2);
      });
      // res.status(200).send(results);
    });
  },
  editData: (req, res) => {
    let dataUpdate = [];
    for (let prop in req.body) {
      dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`);
    }

    let updateQuery = `UPDATE karyawan SET ${dataUpdate} WHERE idkaryawan=${req.params.id}`;
    //   console.log(updateQuery);
    db.query(updateQuery, (err, results) => {
      if (err) return res.status(500).send(err);
      db.query(`SELECT * FROM karyawan;`, (err, results2) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results2);
      });
      // res.status(200).send(results);
    });
  },
  deleteData: (req, res) => {
    let deleteQuery = `DELETE FROM karyawan WHERE idkaryawan=${db.escape(
      req.params.idkaryawan
    )}`;

    db.query(deleteQuery, (err, results) => {
      if (err) return res.status(500).send(err);
      db.query(`SELECT * FROM karyawan;`, (err, results2) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(results2);
      });
      // res.status(200).send(results);
    });
  },
};
