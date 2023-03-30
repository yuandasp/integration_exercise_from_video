import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setKaryawan } from "redux/karyawanSlice";

function Form() {
  const dispatch = useDispatch();
  const karyawan = useSelector((state) => state.karyawan.karyawan);

  const [form, setForm] = useState({
    nama: "",
    usia: 0,
    email: "",
    berat: 0,
    kota: "",
    tahun: 0,
    idposisi: 0,
  });

  const inputHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setForm({
      nama: "",
      usia: 0,
      email: "",
      berat: 0,
      kota: "",
      tahun: 0,
      idposisi: 0,
    });
  };

  const submitButton = async () => {
    try {
      let response = await axios.post(
        "http://localhost:4000/karyawan/add-data",
        { ...form }
      );
      setForm({
        nama: response.data.nama,
        usia: response.data.usia,
        email: response.data.email,
        berat: response.data.berat,
        kota: response.data.kota,
        tahun: response.data.tahun,
        idposisi: response.data.idposisi,
      });
      resetForm();
      dispatch(setKaryawan(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="nama">Nama</label>
        <br />
        <input
          type="text"
          name="nama"
          placeholder="Input Nama"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          value={form.nama}
        />
        <br />
        <label htmlFor="usia">Usia</label>
        <br />
        <input
          type="number"
          name="usia"
          placeholder="Input Usia"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          value={form.usia}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Input Email"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          value={form.email}
        />
        <br />
        <label htmlFor="berat">Berat</label>
        <br />
        <input
          type="number"
          name="berat"
          placeholder="Input Berat"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2  mb-4"
          onChange={inputHandler}
          value={form.berat}
        />
        <br />
        <label htmlFor="kota">Kota</label>
        <br />
        <input
          type="text"
          name="kota"
          placeholder="Input Kota"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          value={form.kota}
        />
        <br />
        <label htmlFor="tahun">Tahun</label>
        <br />
        <input
          type="number"
          name="tahun"
          placeholder="Input Tahun"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          value={form.tahun}
        />
        <br />
        <label htmlFor="posisi">Posisi</label>
        <br />
        <select
          name="idposisi"
          id="idposisi"
          className="w-3/5 border-black-100 border-2 py-1 px-2 rounded-md mt-2 mb-4"
          onChange={inputHandler}
          // value={form.idposisi}
        >
          <option value="">--Please choose an option--</option>
          <option value={1}>CEO</option>
          <option value={2}>CTO</option>
          <option value={3}>Manager</option>
          <option value={4}>Head of Technology</option>
          <option value={5}>Head of Finance</option>
          <option value={6}>HR</option>
          <option value={7}>Software Engineer</option>
        </select>
        <br />
        <button
          className="w-1/5 text-white py-2 font-bold text-sm rounded-md bg-blue-600"
          onClick={() => submitButton(form, resetForm)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
