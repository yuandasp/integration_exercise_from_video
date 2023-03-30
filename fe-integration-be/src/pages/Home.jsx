import React from "react";
import Form from "components/Form";
import TableKaryawan from "components/TableKaryawan";

function Home() {
  return (
    <div className="w-screen h-screen flex justify-start">
      <div className="w-2/6 flex-col p-6">
        <Form />
      </div>
      <div className="w-4/6 mr-8 my-4 mb-8">
        <TableKaryawan />
      </div>
    </div>
  );
}

export default Home;
