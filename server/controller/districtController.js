import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getDistrict = (req, res) => {
    const id = req.params.id;
    logger.info(`get district: ${id}`);

    dal.findById(db.district, id)
        .then(({
            data,
            statusCode
        }) => {
            res.status(statusCode).json(data);
        });
};

export const getAllDistrict = (req, res) => {
    const state_id = req.params.state_id;
    logger.info(`get all district for state: ${state_id}`);
    let condition = {
        state_id: {
            [Op.eq]: state_id
        }
    };
    dal.findByCondition(db.district, condition, ['name'])
        .then(({
            data,
            statusCode
        }) => {
            res.status(statusCode).json(data);
        });
};