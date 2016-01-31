import {Pool} from "../index.d"

var pool = new Pool({
  name: 'mysql',
  create: function(callback) {
    callback(null, null)
  },
  destroy: function(client) {
    client.end();
  },
  max: 10,
  min: 2,
  idleTimeoutMillis: 30000,
  log: true
});

pool.acquire(function(err, client) {
  client.query("select * from foo", [], function() {
    // return object back to pool
    pool.release(client);
  });
});

pool.drain(function() {
  pool.destroyAllNow();
});