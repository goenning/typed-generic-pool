import {Pool} from "../index.d"

var pool = new Pool<String>({
  name: 'demo',
  create: function(callback) {
  },
  destroy: function(client) {
  },
  max: 10,
  idleTimeoutMillis: 30000,
  priorityRange: 3
});

pool.acquire(function(err, client) {
  pool.release(client);
});

pool.acquire(function(err, client) {
  pool.release(client);
}, 0);

pool.acquire(function(err, client) {
  pool.release(client);
}, 1);
