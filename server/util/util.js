import db from '../config/db';
import {
    resolve
} from 'path';
import {
    throws
} from 'assert';
import {
    reject
} from 'rsvp';
const Op = db.Sequelize.Op;

export const findById = (model, id) => new Promise((resolve, reject) => {
    model.findOne({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        })
        .then(data => {
            if (!data) {
                resolve({
                    data: {
                        message: 'Resource not found.'
                    },
                    statusCode: 404
                });
            } else {
                resolve({
                    data,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve({
            data: {
                message: 'Error occoured. Please try again later.'
            },
            statusCode: 500
        }));
});

// (new Promise(resolve, reject) {
//     model.findOne({
//             where: {
//                 id: {
//                     [Op.eq]: id
//                 }
//             }
//         })
//         .then(data =>
//             new Promise((resolve, reject) => {
//                 if (!data) {
//                     resolve({
//                         message: 'Resource not found.'
//                     }, 404);
//                 } else {
//                     resolve(data, 200);
//                 }
//             }))
//         .catch((err) => throws(err));
// })

export const testFn = (model, id) => new Promise((resolve, reject) => {
    setTimeout(resolve({
        data: {
            2: 3
        },
        code: 200
    }), 1000);
});