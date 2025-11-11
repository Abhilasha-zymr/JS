import { createLogger, format, transports } from "winston";

import path from "path";
//const logsDir = path.join(__dirname, "../../logs");

const Logger = createLogger({
  level: "info",
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      ({ level, timestamp, message }) => `${timestamp} ${level}: ${message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename:"error.log", level: "error" }),
    new transports.File({ filename: "combined.log" })
  ]
});

Logger.info("I am Winston");
Logger.error("Something went wrong");

export default Logger;