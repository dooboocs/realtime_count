import { atom, selector } from "recoil";
import axios from "axios";
import moment from "moment";
import workers from "../lib/workers";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzA4NTguRk9AY3Jvd2R3b3Jrcy5rciIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJsYW5nIjoia28tS1IiLCJnbXQiOiJBc2lhL1Nlb3VsIiwiZ2lkIjotMSwiaWF0IjoxNjM1MTIzOTM5LCJleHAiOjE2MzUzODMxMzl9.pyEpSZ7gy7ywrL2ZUZ42Y18ojz4DCKxAsvqwmeAy6vk";
const API_URL = "https://coapi.crowdworks.kr/project/9568/output";

function getDates(start: string) {
  let current = moment(start);
  let dates = [];

  while (current.isBefore(moment())) {
    dates.push(current.format("YYYY-MM-DD"));
    current.add(1, "days");
  }

  return dates;
}

export const targetDates = getDates("2021-09-10");
export const updateDates = getDates("2021-10-12");

export const dataState = atom<any>({
  key: "dataState",
  default: [],
});

export const dailyWorkState = selector<any>({
  key: "dailyWorkState",
  get: ({ get }) => {
    let data = get(dataState);
    const results = [];

    workers.forEach((worker) => {
      let result = { worker: worker.name, tuts: [] };
      let filtered = data.filter(
        (d) => d["workedAt"] && worker.workDates.includes(d["workedAt"].split(" ")[0])
      );
      updateDates.forEach((updateDate) => {
        let filtered2 = filtered.filter(
          (d) => d["updatedAt"] && d["updatedAt"].split(" ")[0] === updateDate
        );
        result.tuts.push({ updateDate, tut: filtered2.length });
      });
      results.push(result);
    });

    return results;
  },
});

export const targetWorkState = selector<any>({
  key: "targetWorkState",
  get: ({ get }) => {
    let data = get(dataState);
    let results = [];

    targetDates.forEach((targetDate) => {
      const target = data.filter(
        (d) => d["workedAt"] && d["workedAt"].split(" ")[0] === targetDate
      );
      const complete = data.filter(
        (d) => d["edited"] && d["workedAt"] && d["workedAt"].split(" ")[0] === targetDate
      );
      results.push({
        targetDate,
        target: target.length,
        complete: complete.length,
      });
    });

    return results;
  },
});

export function getData() {
  return axios
    .get(API_URL, {
      headers: {
        "X-Auth-Token": API_TOKEN,
      },
      params: {
        dataStatus: "ALL_FINISHED",
        size: 20000,
      },
    })
    .then((res) => (res.status === 200 ? res.data["content"] : console.error("API Error")));
}
