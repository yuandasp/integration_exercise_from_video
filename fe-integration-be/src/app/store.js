import { configureStore } from "@reduxjs/toolkit";
import karyawanSlice from "redux/karyawanSlice";

export const store = configureStore({
  reducer: {
    karyawan: karyawanSlice,
  },
});
