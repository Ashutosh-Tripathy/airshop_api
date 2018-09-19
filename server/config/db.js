'use strict'

import Sequelize from 'sequelize';
import env from './env';
import userDetail from '../models/userDetail.js';
import order from '../models/order.js';
import state from '../models/state.js';
import district from '../models/district.js';

const Op = Sequelize.Op;
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: env.DATABASE_DIALECT,
    operatorsAliases: Op,
    define: {
        underscored: true
    },

    storage: env.DATABASE_PATH
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.userDetail = userDetail(sequelize, Sequelize);
db.order = order(sequelize, Sequelize);
db.state = state(sequelize, Sequelize);
db.district = district(sequelize, Sequelize);


//tutor association
db.order.belongsTo(db.userDetail, { foreignKey: 'buyer_id' });
db.userDetail.hasMany(db.order, { foreignKey: 'buyer_id' });

db.order.belongsTo(db.userDetail, { foreignKey: 'seller_id' });
db.userDetail.hasMany(db.order, { foreignKey: 'seller_id' });

db.userDetail.belongsTo(db.state, { foreignKey: 'state_id' });
db.state.hasMany(db.userDetail, { foreignKey: 'state_id' });

db.userDetail.belongsTo(db.district, { foreignKey: 'district_id' });
db.district.hasMany(db.userDetail, { foreignKey: 'district_id' });

//district association
db.district.belongsTo(db.state, { foreignKey: 'state_id' });
db.state.hasMany(db.district, { foreignKey: 'state_id' });



export default db;
