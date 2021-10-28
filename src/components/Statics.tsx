import React from "react";
import { useRecoilValue } from "recoil";
import { dataState } from "../reocil/data";
import { Statistic, Space } from "antd";
import moment from "moment";

export default function Statics() {
  const data = useRecoilValue(dataState);
  const today = moment().format("YYYY-MM-DD");

  return (
    <Space size={50}>
      <Statistic title="전체 1차 검수량" value={data.length} />
      <Statistic title="전체 2차 검수량" value={data.filter((d) => d["edited"]).length} />

      <Statistic
        title="2차 검수 진행률"
        value={Math.round((data.filter((d) => d["edited"]).length / data.length) * 100)}
        suffix="%"
      />

      <Statistic
        title="오늘 총 검수량"
        value={data.filter((d) => d["edited"] && d["updatedAt"].split(" ")[0] === today).length}
      />
    </Space>
  );
}
