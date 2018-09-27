import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
const getState = async (req, res) => {
    const id = req.params.id;
    logger.info(`get state: ${id}`);

    dal.findById(db.state, id)
        .then(({
            data,
            statusCode
        }) => {
            res.status(statusCode).json(data);
        });
};

export default getState;