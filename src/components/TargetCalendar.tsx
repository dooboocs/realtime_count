import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { targetWorkState } from "../reocil/data";
import { Calendar, Badge, Button, Space } from "antd";
import ko_KR from "antd/es/date-picker/locale/ko_KR";
import moment from "moment";

export default function TargetCalendar() {
  const [value, setValue] = useState(moment("2021-10-01"));
  const targetWork = useRecoilValue(targetWorkState);

  function dateCellRender(value) {
    const item = targetWork.find((t) => t["targetDate"] === value.format("YYYY-MM-DD"));

    return item ? (
      <ul>
        <Badge status="success" text={`${item.complete}/${item.target}`} />
        <li>
          <span>1차 검수량: </span>
          <Badge status="success" text={item.target} />
        </li>
        <li>
          <span>2차 검수량: </span>
          <Badge status="success" text={item.complete} />
        </li>
      </ul>
    ) : (
      false
    );
  }

  function dateFullCellRender(value) {
    const item = targetWork.find((t) => t["targetDate"] === value.format("YYYY-MM-DD"));
    const percent = item ? (item.complete / item.target) * 100 : 0;

    return (
      <div className="ant-picker-cell-inner ant-picker-calendar-date">
        <div className="ant-picker-calendar-date-value">{value.format("M월 D일")}</div>
        <div className="ant-picker-calendar-date-content">{dateCellRender(value)}</div>
        <div
          style={{
            position: "absolute",
            background: "#c6f372",
            opacity: 0.5,
            zIndex: -999,
            width: "100%",
            height: `${percent}%`,
            bottom: 0,
            left: 0,
          }}
        />
      </div>
    );
  }

  return (
    <Calendar
      dateFullCellRender={dateFullCellRender}
      locale={ko_KR}
      value={value}
      headerRender={() => (
        <Space size="large" style={{ paddingBottom: 20 }}>
          <Button
            onClick={() => setValue(moment("2021-09-01"))}
            type={value.format("YYYY-MM-DD") === "2021-09-01" ? "primary" : "default"}
          >
            9월
          </Button>
          <Button
            onClick={() => setValue(moment("2021-10-01"))}
            type={value.format("YYYY-MM-DD") === "2021-10-01" ? "primary" : "default"}
          >
            10월
          </Button>
        </Space>
      )}
    />
  );
}
