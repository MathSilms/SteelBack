import path from 'path';
import expressWinston from 'express-winston';
import { createLogger, format, transports } from 'winston';
import { axiosError } from '@redtea/format-axios-error/logform';

expressWinston.requestWhitelist.push('id');
expressWinston.responseWhitelist.push('body');

const http = expressWinston.logger({
  format: format.combine(format.colorize(), format.simple()),
  meta: true,
  expressFormat: true,
  colorize: false,
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'log.json'),
      level: 'debug',
      maxsize: 5242880,
      maxFiles: 5,
      format: format.combine(format.json()),
    }),
  ],
});

const geral = createLogger({
  format: format.combine(
    format.colorize(),
    format.simple(),
    format.timestamp(),
  ),
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'log.json'),
      level: 'warn',
      maxsize: 5242880,
      maxFiles: 5,
      format: format.combine(format.json()),
    }),
  ],
});

const axios = createLogger({
  level: 'info',
  format: format.combine(axiosError(), format.json({ space: 2 })),
  transports: [
    new transports.Console({ level: 'info' }),
    new transports.File({
      filename: path.join(__dirname, '..', '..', 'logs', 'log.json'),
      level: 'warn',
      maxsize: 5242880,
      maxFiles: 5,
      format: format.combine(format.json()),
    }),
  ],
});

export default {
  http,
  geral,
  axios,
};
