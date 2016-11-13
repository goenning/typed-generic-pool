import { Pool } from '../index';

const pool = new Pool<Boolean>({
  create: () => undefined,
  destroy: () => undefined
});

pool.getName();
pool.getPoolSize();
pool.availableObjectsCount();
pool.waitingClientsCount();
pool.getMaxPoolSize();
pool.getMinPoolSize();
