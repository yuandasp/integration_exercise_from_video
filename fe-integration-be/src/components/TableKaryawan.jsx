import React from "react";
import axios from "axios";
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
import { setKaryawan } from "redux/karyawanSlice";

function TableKaryawan() {
  const dispatch = useDispatch();
  const karyawan = useSelector((state) => state.karyawan.karyawan);

  const getDatakaryawan = async () => {
    try {
      let response = await axios.get("http://localhost:4000/karyawan");
      // console.log(response.data);
      dispatch(setKaryawan(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatakaryawan();
  }, []);

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
                <Td>{data.idposisi}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableKaryawan;
