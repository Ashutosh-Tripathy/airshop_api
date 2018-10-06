'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const userDetailRoutes= (router, db) => {
  router.get('/userdetail/:userId', controller.getUserDetail);
  router.post('/userdetail', controller.insertUserDetail);
  //router.post('userdetail', controller.createUserDetail);
};
export default userDetailRoutes;