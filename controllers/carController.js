const {
    createCar, deleteCar, getAllCars, getAllCarsByUsername, getCarById, getCarByName, updateCar
} = require("../services/carService")


async function create(username, newCar) {

    try {
        return  await createCar(username, newCar)

    } catch (e) {
        return e
    }
}


async function remove(username, carId) {

    try {
        await deleteCar(username, carId)

    } catch (e) {
        return e
    }
}
async function update(username, carId, car) {

    try {
        await updateCar(username, carId, car)

    } catch (e) {
        return e
    }
}
async function getAll() {

    try {
        return await getAllCars()

    } catch (e) {
        return e
    }
}
async function getOneById(carId) {

    try {
        return  await getCarById(carId)

    } catch (e) {
        return e
    }
}
async function getOneByName(carName) {

    try {
        return  await getCarByName(carName)

    } catch (e) {
        return e
    }
}
async function getAllByName(username) {

    try {
        return await getAllCarsByUsername(username)

    } catch (e) {
        return e
    }
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

