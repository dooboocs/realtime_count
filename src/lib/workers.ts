export interface IWorker {
  key: string;
  name: string;
  workDates: string[];
  group?: "manager" | "crowd_worker";
  histories?: {
    date: string;
    tut: number;
  };
}

let workers: IWorker[] = [
  {
    key: "1",
    name: "이지수",
    workDates: ["2021-09-30", "2021-10-07", "2021-10-17", "2021-09-25"],
  },
  {
    key: "2",
    name: "성민정",
    workDates: ["2021-10-01", "2021-10-08", "2021-10-19", "2021-09-22"],
  },
  {
    key: "3",
    name: "정지원",
    workDates: ["2021-10-09", "2021-10-18", "2021-09-24"],
  },
  {
    key: "4",
    name: "염한나",
    workDates: ["2021-10-02", "2021-10-10", "2021-09-28", "2021-09-23"],
  },
  {
    key: "5",
    name: "장미숙",
    workDates: ["2021-10-03", "2021-10-11", "2021-10-16", "2021-09-26"],
  },
  {
    key: "6",
    name: "김송미",
    workDates: ["2021-10-14", "2021-10-20", "2021-09-21"],
  },
  {
    key: "7",
    name: "김지혜",
    workDates: ["2021-09-29", "2021-10-15", "2021-09-27"],
  },
  {
    key: "8",
    name: "배수현",
    workDates: ["2021-10-21", "2021-10-22"],
  },
  {
    key: "9",
    name: "김하람",
    workDates: ["2021-10-06", "2021-09-14"],
    group: "manager",
  },
  {
    key: "10",
    name: "김예림",
    workDates: ["2021-09-10", "2021-09-11", "2021-09-15"],
    group: "manager",
  },
  {
    key: "11",
    name: "송노아",
    workDates: ["2021-09-12", "2021-09-16"],
    group: "manager",
  },
  {
    key: "12",
    name: "이태희",
    workDates: ["2021-09-13", "2021-09-17", "2021-10-12", "2021-10-12", "2021-09-18"],
    group: "manager",
  },
];

export default workers;
