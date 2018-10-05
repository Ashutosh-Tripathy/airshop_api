import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getUserDetail = (req, res) => {
  const user_id = req.params.user_id;
  logger.info(`get userDetail: ${user_id}`);

  dal.findById(db.userDetail, user_id)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};


export const insertUserDetail = (req, res) => {
  const body = dal.convertObject(req.body, 'userDetail', 'post');
  logger.info(`post userDetail: ${body}`);

  dal.insertData(db.userDetail, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};