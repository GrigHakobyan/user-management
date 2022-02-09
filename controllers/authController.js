const { loginByUsername, registerUser } = require("../services/authService");
const {tokenGenerator} = require("../helper/tokenGenerator");
const {BadRequestError} = require("../helper/exceptions/badRequestError");



async function login({ username, password }) {
    try {
        const user = await loginByUsername(username, password)

        const { password: pass, ...data } = user

        const accessToken = tokenGenerator(data, '1h')

        return { accessToken }

    } catch (e) {
        return e
    }
}

async function registration({ username, password, email }) {

    if (!username.trim() || !password.trim() || !email.trim()){
        return new BadRequestError("User data not valid")
    }


    const payload = {
        username,
        password
    }

    try {
        await registerUser({username, password, email})
    } catch (e) {
        return e
    }

    const accessToken = tokenGenerator(payload, '1h')

    return { accessToken }

}

module.exports = { login, registration }
