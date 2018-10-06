'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const userDetailRoutes = (router, db) => {
  router.get('/userdetail/:userId/orderdetail/:orderId', controller.getOrderDetail);
  router.post('/userdetail/:userId/orderdetail', controller.insertOrderDetail);
  router.get('/userdetail/:userId/orders', controller.getOrders);
  router.patch('/userdetail/:userId/orderdetail/:orderId', controller.updateOrderDetail);
  //router.post('userdetail', controller.createUserDetail);
};
export default userDetailRoutes;