'use strict';
import logger from '../../logging/logger';
const saltRounds = 3;
import controller from '../../controller';
import userDetail from '../../models/userDetail';

const userDetailRoutes= (router, db) => {
  router.get('/userdetail/:id', controller.getUserDetail);
  //router.post('userdetail', controller.createUserDetail);
};
export default userDetailRoutes;