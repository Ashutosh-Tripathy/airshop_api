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

export const findById = (model, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.findOne({
        where: Object.assign(whereCondition, {
            id: {
                [Op.eq]: id
            }
        })
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

export const findByCondition = (model, condition, orderBy) => new Promise((resolve, reject) => {
    model.findAll({
        where: condition,
        order: orderBy || []
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

export const insertData = (model, data) => new Promise((resolve, reject) => {
    model.create(data)
        .then(out => {
            if (!out) {
                resolve({
                    data: {
                        message: 'Resource not created.'
                    },
                    statusCode: 500
                });
            } else {
                resolve({
                    data: out,
                    statusCode: 200,
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

export const updateById = (model, data, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.update(
        data, {
            where: Object.assign(whereCondition, {
                id: {
                    [Op.eq]: id
                }
            })
        })
        .then(out => {
            if (!out[0]) {
                resolve({
                    data: {
                        message: 'Resource not found.'
                    },
                    statusCode: 404
                });
            } else {
                resolve({
                    data: out,
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

export const deleteById = (model, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.destroy({
        where: Object.assign(whereCondition, {
            id: {
                [Op.eq]: id
            }
        })
    })
        .then(affectedRows => {
            if (!affectedRows) {
                resolve({
                    data: {
                        message: 'Resource not found.'
                    },
                    statusCode: 404
                });
            } else {
                resolve({
                    data: affectedRows,
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

export const testFn = (model, id) => new Promise((resolve, reject) => {
    setTimeout(resolve({
        data: {
            2: 3
        },
        code: 200
    }), 1000);
});