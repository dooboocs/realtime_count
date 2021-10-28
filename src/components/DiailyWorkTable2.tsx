import React from "react";
import { Table } from "@mantine/core";
import { useRecoilValue } from "recoil";
import { dailyWorkState, updateDates } from "../reocil/data";

export default function DiailyWorkTable2() {
  const dailyWork = useRecoilValue(dailyWorkState);

  const rows = dailyWork.map((data) => (
    <tr key={data.worker}>
      <td>{data.worker}</td>
      {updateDates.map((updateDate) => {
        const item = data.tuts.find((t) => t.updateDate === updateDate);
        return <td>{item.tut}</td>;
      })}
    </tr>
  ));

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>작업자</th>
          {updateDates.map((updateDate, index) => (
            <th key={index}>{updateDate.replace("2021-", "")}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
