import {Pool} from "../index.d"

var pool = new Pool<String>({
  name: 'demo',
  create: function(callback) {
    callback(null, 'Hello World')
  },
  destroy: function(client) {

  },
  max: 10,
  min: 2,
  idleTimeoutMillis: 30000,
  log: true
});

pool.acquire(function(err, client) {
  pool.release(client);
});

pool.drain(function() {
  pool.destroyAllNow();
});
