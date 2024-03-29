import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AssetTable: React.FC = () => {
  const [dataTable, setDataTable] = useState([]);

  // const { data, status }: any = useQuery("assets", fetchAssets);

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // setDataTable(data);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
};

export default AssetTable;
