import Sequelize from 'sequelize';

const userDetail = (sequelize, DataTypes) => {
  const tbl = sequelize.define('user_detail', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      length: 50
    },
    mobile: {
      type: DataTypes.INTEGER,
      length: 10,
      validate: {
        min: 6000000000,
        max: 9999999999
      }
    },
    //1 buyer, 2 seller
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'state_id'
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'district_id'
    },
    area: {
      type: DataTypes.STRING,
      length: 50
    },
    address: {
      type: DataTypes.STRING,
      length: 100
    }
  }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true
    });
  return tbl;
};


export default userDetail;