const { Sequelize,Model , DataTypes } = require('sequelize')
const sequelize = new Sequelize()



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
    }
})


module.exports = User
