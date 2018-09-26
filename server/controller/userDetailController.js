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

  // console.log(dal.testFn);
  // dal.testFn().then(({
  //   data,
  //   code
  // }) => {
  //   console.log(data);
  //   console.log(code);
  //   res.status(code).json(data);
  // });
// res.status(code).json(data);
// db.userDetail.findOne({
//     where: {
//       id: {
//         [Op.eq]: id
//       }
//     },
//   })
//   .then(userDetail => {
//     if (!userDetail) {
//       res.status(404).json({
//         message: 'Resource not found.'
//       });
//     } else {
//       res.status(200).json(userDetail);
//     }
//   })
//   .catch(handleError);
// const handleError = (err) => {
//   logger(0, err);
//   res.status(500).json({
//     message: 'Unsuccessful, Please try again.'
//   });
// };

export default getUserDetail;