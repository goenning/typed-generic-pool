import {Pool} from "../generic-pool.d"

var pool = new Pool({
  create: () => { },
  destroy: () => { }
});


pool.getName()
pool.getPoolSize()
pool.availableObjectsCount()
pool.waitingClientsCount()
pool.getMaxPoolSize()
pool.getMinPoolSize()