import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataState, getData } from "./reocil/data";
import TargetCalendar from "./components/TargetCalendar";
import DiailyWorkTable2 from "./components/DiailyWorkTable2";
import { Space } from "antd";
import Statics from "./components/Statics";

export default function Dashboard() {
  const [data, setData] = useRecoilState(dataState);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, [setData]);

  return data ? (
    <div style={{ padding: 30 }}>
      <Space direction="vertical" size={50}>
        <Statics />
        <DiailyWorkTable2 />
        <TargetCalendar />
      </Space>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
