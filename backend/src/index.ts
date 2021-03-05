import 'dotenv/config';
import * as http from 'http';
import logger from '@config/logger';
import App from './app';
import createConnection from './database';

// Redis cache
//import { cache } from './config/redis';

createConnection()
  .then(connect =>
    logger.geral.info({
      message: 'SYSTEM',
      service: connect.options.type,
      environment: `local`,
      //port: `${Number(process.env.DB_PORT) | 5432}`,
    }),
  )
  .catch(error =>
    logger.geral.error({
      message: 'SYSTEM',
      service: 'database',
      error: error.message,
      description: error,
    }),
  );
//cache();

const server = http.createServer(App);
server.listen(process.env.APP_PORT || 3333);

server.on('listening', (): void => {
  logger.geral.info({
    message: 'SYSTEM',
    service: 'api',
    environment: `local`,
    port: `${Number(process.env.APP_PORT) || 3333}`,
  });
});

server.on('error', (error: NodeJS.ErrnoException): void => {
  logger.geral.error({
    message: 'SYSTEM',
    service: 'api',
    error: error.message,
    description: error,
  });
});
