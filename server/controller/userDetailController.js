import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getUserDetail = (req, res) => {
  const id = req.params.id;
  logger.info(`get userDetail: ${id}`);

  dal.findById(db.userDetail, id)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};


export const insertUserDetail = (req, res) => {
  const body = req.body;
  logger.info(`post userDetail: ${body}`);

  dal.insertData(db.userDetail, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

