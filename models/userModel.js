const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const sequelize = require('../db')


const User = sequelize.define("user",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        unique: true
    },

    password: DataTypes.STRING,

    email: {
        type: DataTypes.STRING,
        unique: true
    },

})


User.addHook('beforeCreate', async (user) => {
    user.password = await bcrypt.hash(user.password, 5)
})

module.exports = User

