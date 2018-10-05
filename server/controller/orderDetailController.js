import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
const getBuyerSellerCondition = (id) => ({
  [Op.or]: [
    {
      buyer_id: {
        [Op.eq]: id
      }
    },
    {
      seller_id: {
        [Op.eq]: id
      }
    }
  ]
});

export const getOrderDetail = (req, res) => {
  const user_id = req.params.user_id;
  const order_id = req.params.order_id;
  logger.info(`get orderDetail: ${order_id}`);

  dal.findById(db.orderDetail, order_id, getBuyerSellerCondition(user_id))
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const getOrders = (req, res) => {
  const userId = req.params.user_id;
  // const buyer_id = req.query.buyer_id;
  // const seller_id = req.query.seller_id;
  logger.info(`get orderDetails: user_id=${userId}`);
  let condition = {};
  // if (buyer_id) {
  //   condition.buyer_id = {
  //     [Op.eq]: buyer_id
  //   };
  // }

  // if (seller_id || !buyer_id) {
  //   condition.seller_id = {
  //     [Op.eq]: seller_id
  //   };
  // }

  dal.findByCondition(db.orderDetail, getBuyerSellerCondition(userId), [
    ['created_at', 'DESC']
  ])
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const insertOrderDetail = (req, res) => {
  const userId = req.params.user_id;
  const body = dal.convertObject(req.body, 'orderDetail', 'post');
  logger.info(`post orderDetail: ${JSON.stringify(body)}`);
  if (req.body && req.body.buyer_id != userId) {
    logger.warn(`post orderDetail: user ${userId} tried to insert data as user ${req.body.buyer_id}.`);
    res.status(500).json({
      message: 'Error occoured. Please try again later.'
    });
  } else {
    dal.insertData(db.orderDetail, body)
      .then(({
        data,
        statusCode
      }) => {
        res.status(statusCode).json(data);
      });
  }
};

export const updateOrderDetail = (req, res) => {
  const userId = req.params.user_id;

  const orderId = req.params.order_id;
  const body = dal.convertObject(req.body, 'orderDetail', 'patch');
  logger.info(`patch orderDetail: ${JSON.stringify(body)}`);

  dal.updateById(db.orderDetail, body, orderId, getBuyerSellerCondition(userId))
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};