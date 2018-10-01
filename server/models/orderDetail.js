import Sequelize from 'sequelize';

const orderDetail = (sequelize, DataTypes) => {
  const tbl = sequelize.define('order_detail', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    //1: Pending for approval, 2: Wating to be shipped, 3: Out for delivery, 4: Delivered, 5: Closed
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    note: {
      type: DataTypes.STRING,
      length: 5000
    }
  }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      freezeTableName: true
    });
  return tbl;
};


export default orderDetail;