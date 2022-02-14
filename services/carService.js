const {User, Car} = require('../models')

const { getUserByUsername } = require('./userService')
const {NotFoundError} = require("../helper/exceptions/notFoundError");
const {BadRequestError} = require("../helper/exceptions/badRequestError");
const {isString} = require("../helper/isString");

async function createCar(username, { name, model }){
    const user = await getUserByUsername(username)

    throwErrorIfDoesNotExist(user, 'Invalid request')

    const car = await Car.findOne({ where: { name: name } })

    throwErrorIfExist(car,'Car already exist')

    const newCar = await Car.create({ name, model, userId: user.id })

    return newCar.dataValues
}

async function deleteCar(username, carId){
    const user = await getUserByUsername(username)

    throwErrorIfDoesNotExist(user, 'Invalid request')

    const car = await Car.findOne({where: { id: carId }})

    throwErrorIfDoesNotExist(car, 'Car does not exist')

    await car.destroy()

    return car
}

async function updateCar(username, carId, { name, model }){
    const user = await getUserByUsername(username)

    throwErrorIfDoesNotExist(user, 'Invalid request')

    const car = await Car.findOne({ where: { id: carId } })

    throwErrorIfDoesNotExist(car, 'Car does not exist')

    car.name = name || car.name
    car.model = model || car.model

    return await car.save()
}

async function getAllCars(){
    return await Car.findAll({
        attributes: ['id', 'name', 'model']
    })

}

async function getCarById(carId){
    if(isString(carId)){
        throw new BadRequestError()
    }

    const car = await Car.findOne({ where: { id: carId } })

    throwErrorIfDoesNotExist(car, 'Car does not exist')

    return car
}

async function getCarByName(carName){
    throwErrorIfDoesNotExist(carName, 'Invalid request')

    const car = await Car.findOne({ where: { name: carName } })

    throwErrorIfDoesNotExist(car, 'Car does not exist')

    return car.dataValues
}

async function getAllCarsByUsername(username){
    if(!isString(username)) {
        throw new BadRequestError()
    }

    const user = await User.findOne({
        attributes: ['id'],
        where: { username: username }
    })


    throwErrorIfDoesNotExist(user, 'Invalid request')

    const cars = await Car.findAll({ where: {userId: user.dataValues.id} })

    throwErrorIfDoesNotExist(cars, 'User does not have any car')

    return cars
}

function throwErrorIfDoesNotExist(target, message) {
    if(!target) {
        throw new NotFoundError(message)
    }
}


function throwErrorIfExist(target, message) {
    if(target) {
        throw new BadRequestError(message)
    }
}


module.exports = {
    deleteCar,
    createCar,
    getAllCars,
    updateCar,
    getAllCarsByUsername,
    getCarById,
    getCarByName
}
