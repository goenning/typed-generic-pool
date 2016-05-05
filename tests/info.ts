import {Pool} from "../index.d"

var pool = new Pool<Boolean>({
  create: () => { },
  destroy: () => { }
});


pool.getName()
pool.getPoolSize()
pool.availableObjectsCount()
pool.waitingClientsCount()
pool.getMaxPoolSize()
pool.getMinPoolSize()
