import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
const getUserDetail = async (req, res) => {
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

export default getUserDetail;