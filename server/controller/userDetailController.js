import db from '../config/db';
import logger from '../logging/logger';

const Op = db.Sequelize.Op;
const getUserDetail = (req, res) => {
  const id = req.params.id;
  logger(3, `Get userDetail: ${id}`);

  db.userDetail.findOne({
    where: { id: { [Op.eq]: id } },
  })
    .then(userDetail => {
      if (!userDetail) {
        res.status(404).json({ message: 'Resource not found.' });
      } else {
        res.status(200).json(userDetail);
      }
    })
    .catch(handleError)    ;
}


const handleError = (err) => {
  logger(0, err);
  res.status(500).json({ message: 'Unsuccessful, Please try again.' });
}

export default getUserDetail;
