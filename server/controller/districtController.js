import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
const getDistrict = async (req, res) => {
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

export default getDistrict;