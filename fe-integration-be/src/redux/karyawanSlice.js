import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  karyawan: [],
  form: {
    nama: "",
    usia: 0,
    email: "",
    berat: 0,
    kota: "",
    tahun: 0,
    idposisi: 0,
    isEditing: false,
  },
};

export const karyawanSlice = createSlice({
  name: "karyawan",
  initialState,
  reducers: {
    setKaryawan: (state, action) => {
      state.karyawan = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    resetForm: (state, action) => {
      state.form = {
        nama: "",
        usia: 0,
        email: "",
        berat: 0,
        kota: "",
        tahun: 0,
        idposisi: 0,
      };
    },
  },
});

export const { setKaryawan, setForm, resetForm } = karyawanSlice.actions;

export default karyawanSlice.reducer;

// export function getDatakaryawan () {
export const getDatakaryawan = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get("http://localhost:4000/karyawan");
      // console.log(response.data);
      dispatch(setKaryawan(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
