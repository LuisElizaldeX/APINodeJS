'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    static associate(models) {
      pelicula.belongsToMany(models.categoria, {as: 'categoria', through: 'categoriapelicula', foreignKey: 'peliculaid'});
    }
  }
  pelicula.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      defaultValue: "Sin título"
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      defaultValue: "N/A"
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'pelicula',
  });
  
  return pelicula;
};