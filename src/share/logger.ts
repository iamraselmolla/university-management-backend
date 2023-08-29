import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf } = format;

// const logger = createLogger({
//   format: combine(
//     label({ label: 'right meow!' }),
//     timestamp(),
//     myFormat
//   ),
//   transports: [new transports.Console()]
// })

const myFormat = printf(({ level, message, label, timestamp }) => {
  const getTimes = new Date(timestamp);
  const hours = getTimes.getHours()
  const minuutes = getTimes.getMinutes()
  const seconds = getTimes.getSeconds()
  return `${getTimes.toDateString()} ${hours} : ${minuutes} : ${seconds} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Rasel Molla' }),
    timestamp(),
    myFormat
  ),
  transports: [

    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success', 'success-%DATE%.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});

const Errorlogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'Rasel Molla Error' }),
    timestamp(),
    myFormat
  ),
  transports: [

    new transports.Console(),

    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error', 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});

export default { logger, Errorlogger };