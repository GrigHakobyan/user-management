const { DataTypes } = require('sequelize')

const sequelize = require('../db')

const Car = sequelize.define('car',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: DataTypes.STRING,

    model: DataTypes.STRING
})


module.exports = Car
