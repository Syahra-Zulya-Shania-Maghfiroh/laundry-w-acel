"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.outlet, {
        foreignKey: "id_outlet",
        as: "outlet",
      });
    }
  }
  paket.init(
    {
      id_outlet: DataTypes.INTEGER,
      jenis: DataTypes.ENUM("kiloan", "selimut", "bed_cover", "kaos", "lain"),
      nama_paket: DataTypes.STRING,
      harga: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      sequelize,
      modelName: "paket",
    }
  );
  return paket;
};
