'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const userDetailRoutes = (router, db) => {
  router.get('/userdetail/:user_id/orderdetail/:order_id', controller.getOrderDetail);
  router.post('/userdetail/:user_id/orderdetail', controller.insertOrderDetail);
  router.get('/userdetail/:user_id/orders', controller.getOrders);
  router.patch('/userdetail/:user_id/orderdetail/:order_id', controller.updateOrderDetail);
  //router.post('userdetail', controller.createUserDetail);
};
export default userDetailRoutes;