const { loginByUsername, registerUser } = require("../services/authService");
const { HttpError } = require("../helper/httpErrors");
const {tokenGenerator} = require("../helper/tokenGenerator");



async function login(username, password) {
    try {
        const user = await loginByUsername(username, password)

        const { password: pass,refreshToken: token, ...data } = user

        const accessToken = tokenGenerator(data, '30s')

        return { accessToken }

    } catch (e) {
        console.log(e)
        return e
    }
}

async function registration(userData) {

    if (!userData.username.trim() || !userData.password.trim() || !userData.email.trim()){
        return HttpError("User data not valid")
    }

    const {password: pass, ...payload} = userData

    try {
        await registerUser(userData)
    } catch (e) {
        return e
    }

    const accessToken = tokenGenerator(payload, '1h')

    return { accessToken }

}

module.exports = { login, registration }
