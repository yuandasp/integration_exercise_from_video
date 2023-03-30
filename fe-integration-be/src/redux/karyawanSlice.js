import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  karyawan: [],
};

export const karyawanSlice = createSlice({
  name: "karyawan",
  initialState,
  reducers: {
    setKaryawan: (state, action) => {
      state.karyawan = action.payload;
    },
  },
});

export const { setKaryawan } = karyawanSlice.actions;

export default karyawanSlice.reducer;
