'use strict';
import bcrypt from 'bcrypt';
import logger from '../../logging/logger';
const saltRounds = 3;
import controller from '../../controller';

module.exports = (router, db) => {
  router.get('/userdetail/:id', controller.getUserDetail);
  //router.post('userdetail', controller.createUserDetail);
};