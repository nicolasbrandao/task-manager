import { AceBase } from "acebase";

export const db = new AceBase('mydb');

export function initDatabase(): Promise<void> {
  return db.ready(() => {
    console.log("db is ready");
  })
}