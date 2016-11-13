import { Pool } from '../index';

const pool = new Pool<string>({
  name: 'demo',
  create: function(callback) {
    callback(null, 'Hello World');
  },
  destroy: function(client) {

  },
  max: 10,
  min: 2,
  idleTimeoutMillis: 30000,
  log: true
});

pool.acquire(function (err, client) {
  pool.release(client);
});

pool.drain(function () {
  pool.destroyAllNow();
});
