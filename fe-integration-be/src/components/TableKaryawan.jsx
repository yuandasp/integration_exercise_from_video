import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setKaryawan, setForm, getDatakaryawan } from "redux/karyawanSlice";
import axios from "axios";

function TableKaryawan() {
  const dispatch = useDispatch();
  const karyawan = useSelector((state) => state.karyawan.karyawan);

  useEffect(() => {
    dispatch(getDatakaryawan());
  }, []);

  const onEdit = (data) => {
    console.log(data);
    dispatch(setForm({ ...data, isEditing: true }));
  };

  const onDelete = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:4000/karyawan/${id}`);
      dispatch(getDatakaryawan());
    } catch (error) {}
  };

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="blue" type="sm">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nama</Th>
              <Th>Usia</Th>
              <Th>Email</Th>
              <Th>Berat</Th>
              <Th>Kota</Th>
              <Th>Tahun</Th>
              <Th>Posisi</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {karyawan.map((data) => (
              <Tr key={data.idkaryawan}>
                <Td>{data.idkaryawan}</Td>
                <Td>{data.nama}</Td>
                <Td>{data.usia}</Td>
                <Td>{data.email}</Td>
                <Td>{data.berat}</Td>
                <Td>{data.kota}</Td>
                <Td>{data.tahun}</Td>
                <Td>{data.posisi}</Td>
                <Td>
                  <button
                    onClick={() => onEdit(data)}
                    className="text-white py-2 px-2 font-bold text-sm rounded-md bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    className="text-white py-2 px-2 font-bold text-sm rounded-md bg-red-600"
                    onClick={() => onDelete(data.idkaryawan)}
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableKaryawan;
