import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getOrder = (req, res) => {
  const id = req.params.id;
  logger.info(`get orderDetail: ${id}`);

  dal.findById(db.orderDetail, id)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const getOrders = (req, res) => {
  const buyer_id = req.query.buyer_id;
  const seller_id = req.query.seller_id;
  logger.info(`get orderDetails: buyer_id=${buyer_id}, seller_id:=${seller_id}`);
  let condition = {};
  if (buyer_id) {
    condition.buyer_id = {
      [Op.eq]: buyer_id
    };
  }

  if (seller_id || !buyer_id) {
    condition.seller_id = {
      [Op.eq]: seller_id
    };
  }

  dal.findByCondition(db.orderDetail, condition, ['created_at'])
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};