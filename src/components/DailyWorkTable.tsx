import React from "react";
import { useRecoilValue } from "recoil";
import { dailyWorkState, updateDates } from "../reocil/data";
import { Table } from "antd";

export default function DailyWorkTable() {
  const dailyWork = useRecoilValue(dailyWorkState);

  const dateColumns = updateDates.map((updateDate) => ({
    title: `${updateDate.split("-")[1]}/${updateDate.split("-")[2]}`,
    dataIndex: "tuts",
    key: updateDate,
    render: (tuts) => {
      return <div>{tuts.find((t) => t["updateDate"] === updateDate)["tut"]}</div>;
    },
  }));

  let columns = [
    {
      title: "Worker",
      dataIndex: "worker",
      key: "worker",
    },
    ...dateColumns,
  ];

  return <Table dataSource={dailyWork} columns={columns} size="small" pagination={false} />;
}
