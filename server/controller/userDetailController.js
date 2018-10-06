import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getUserDetail = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get userDetail: ${userId}`);

  dal.findById(db.userDetail, userId)
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