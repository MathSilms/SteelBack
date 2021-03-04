import redis from 'redis';
import logger from './logger';

const client = redis.createClient({
  host: 'localhost',
  port: Number(process.env.REDIS_PORT) | 6379,
});

export const cache = async (): Promise<boolean> => {
  if (client) {
    client.on('connect', (): void => {
      logger.geral.info({
        message: 'SYSTEM',
        service: 'redis',
        port: `${Number(process.env.REDIS_PORT) | 6379}`,
      });
    });

    client.on('error', (error): void => {
      logger.geral.error({
        message: 'SYSTEM',
        service: 'redis',
        error: error.message,
        description: error,
      });
    });
    return true;
  }
  return false;
};

export const get = (key: string) =>
  new Promise((resolve, reject) => {
    client.get(key, (err, value) => {
      err ? reject(err) : resolve(value);
    });
  });

export const set = (key: string, value: string) =>
  new Promise((resolve, reject) => {
    client.set(key, value, 'EX', 300, err => {
      err ? reject(err) : resolve(true);
    });
  });
