import {Pool} from "../index.d"

var pool = new Pool<String>({
  create: () => { },
  destroy: () => { }
});

var privateFn, publicFn;
publicFn = pool.pooled(privateFn = function(client, arg, cb) {
  cb(null, arg);
});

var privateTop, privateBottom, publicTop, publicBottom;
publicBottom = pool.pooled(privateBottom = function(client, arg, cb) {
});

publicTop = pool.pooled(privateTop = function(client, cb) {
  privateBottom(client, "arg", function(err, retVal) {
    if (err) { return cb(err); }
    cb();
  });
});
