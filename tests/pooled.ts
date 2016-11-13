import { Pool } from '../index';

const pool = new Pool<string>({
  create: () => undefined,
  destroy: () => undefined
});

const exec = pool.pooled(function(client, arg, cb) {
  cb(null, arg);
});

exec('test', 1, 2, 3);
