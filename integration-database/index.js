const express = require("express");
const cors = require("cors");
const PORT = 4000;
const app = express();
const { karyawanRouter } = require("./routers/index");
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("<h4>Integrated express with mySQL</h4>");
// });

app.use("/karyawan", karyawanRouter);

app.listen(PORT, () => console.log("Server is running on port ", PORT));
