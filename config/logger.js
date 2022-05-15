const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const LOG_LABEL = "CTSE-Project";
const LOG_TIMEZONE = "Asia/Colombo";
const LOCALE = "en-US";
const timezoned = () => {
  return new Date().toLocaleString(LOCALE, {
    timeZone: LOG_TIMEZONE,
  });
};

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const combineFormat = combine(
  label({ label: LOG_LABEL }),
  timestamp({ format: timezoned }),
  customFormat
);

const logger = createLogger({
  format: combineFormat,
  transports: [new transports.Console()],
});

module.exports = logger;
