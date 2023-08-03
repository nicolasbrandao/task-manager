import { Handler } from "express"

export const timeLogger: Handler = (_req, _res, next) => {
  console.log('Time: ', Date.now())
  next()
}
