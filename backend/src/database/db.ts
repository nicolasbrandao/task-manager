import { AceBase } from "acebase";

export const db = new AceBase("mydb");

export async function initDatabase(): Promise<void> {
  await db.ready(() => {
    console.log("db is ready");
  });
}
