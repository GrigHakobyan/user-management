const {
    createCar, deleteCar, getAllCars, getAllCarsByUsername, getCarById, getCarByName, updateCar
} = require("../services/carService")


async function create(username, newCar) {
    return createCar(username, newCar)
}

async function remove(username, carId) {
    return deleteCar(username, carId)
}
async function update(username, carId, car) {
    return updateCar(username, carId, car)
}
async function getAll() {
    return getAllCars()
}
async function getOneById(carId) {
    return getCarById(carId)
}
async function getOneByName(carName) {
    return getCarByName(carName)
}
async function getAllByName(username) {
    return getAllCarsByUsername(username)
}

module.exports = {
    create,
    getAll,
    getAllByName,
    getOneById,
    update,
    remove,
    getOneByName
}

