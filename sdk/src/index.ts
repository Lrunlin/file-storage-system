import { v4 } from "uuid";
import start from "./start";

// @ts-ignore
const isBrowser = typeof window !== "undefined";

// 动态引入 Node.js 模块
let id = () => 1;
let getAllRouter = async () => [];
let mysql = {};

if (!isBrowser) {
  // 仅在 Node.js 环境中引入这些模块
  id = require("./id").default;
  getAllRouter = require("./getAllRouter").default;
  mysql = require("./server").mysql;
  let update = require("./update").default;
  update();
}

const globalObject: any = isBrowser ? window : global;

globalObject.meta_event = Object.assign(globalObject?.meta_event || {}, {
  connectError: false,
  isDBDataEmpty: false,
  sqlRun: false,
  sqlList: [],
});

if (!globalObject.meta_event?.unlock) {
  start();
}

const uuid = v4;

const all = {
  uuid,
  id,
  getAllRouter,
  mysql,
};

export default all;
export { uuid, id, getAllRouter, mysql };
