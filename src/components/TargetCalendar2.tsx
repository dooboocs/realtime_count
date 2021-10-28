import React from "react";
import { useRecoilValue } from "recoil";
import { targetWorkState } from "../reocil/data";
import { Calendar } from "@mantine/dates";

export default function TargetCalendar2() {
  const targetWork = useRecoilValue(targetWorkState);
  const today = new Date();

  return (
    <div style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 50 }}>
      <Calendar
        value={today}
        fullWidth
        styles={{
          cell: { borderTop: "1px solid #f2f2f2", margin: "0 10px", boxSizing: "border-box" },
        }}
      />
    </div>
  );
}
