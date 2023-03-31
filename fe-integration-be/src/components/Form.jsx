import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setKaryawan,
  setForm,
  resetForm,
  getDatakaryawan,
} from "redux/karyawanSlice";

function Form() {
  const dispatch = useDispatch();
  const karyawan = useSelector((state) => state.karyawan.karyawan);
  const form = useSelector((state) => state.karyawan.form);

  const inputHandler = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    dispatch(setForm({ ...form, [event.target.name]: event.target.value }));
  };

  const submitButton = async () => {
    try {
      if (form.isEditing === false) {
        let response = await axios.post(
          "http://localhost:4000/karyawan/add-data",
          {
            nama: form.nama,
            usia: parseInt(form.usia),
            email: form.email,
            berat: parseFloat(form.berat),
            kota: form.kota,
            tahun: parseInt(form.tahun),
            idposisi: parseInt(form.idposisi),
          }
        );
        // console.log(response.data);
        dispatch(resetForm());
        dispatch(setKaryawan(response.data));
      } else if (form.isEditing === true) {
        let response = await axios.patch(
          `http://localhost:4000/karyawan/edit-karyawan/${form.idkaryawan}`,
          {
            nama: form.nama,
            usia: parseInt(form.usia),
            email: form.email,
            berat: parseFloat(form.berat),
            kota: form.kota,
            tahun: parseInt(form.tahun),
            idposisi: parseInt(form.idposisi),
          }
        );
        dispatch(getDatakaryawan());
      }
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
          value={form.idposisi}
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
