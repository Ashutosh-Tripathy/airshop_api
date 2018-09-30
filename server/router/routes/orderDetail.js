'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const userDetailRoutes= (router, db) => {
  router.get('/orderdetail/:id', controller.getOrderDetail);
  router.post('/orderdetail', controller.insertOrderDetail);
  router.get('/orders', controller.getOrders);
  //router.post('userdetail', controller.createUserDetail);
};
export default userDetailRoutes;