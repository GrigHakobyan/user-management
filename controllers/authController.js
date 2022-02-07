const {loginByUsername, registerUser} = require("../services/authService");


async function login(ctx) {
    const { username, password } = ctx.request.body

    const user = await loginByUsername(username, password)
    console.log(user)

    ctx.body = user
}

async function registration(ctx) {
    const userData = ctx.request.body

    const user = await registerUser(userData)

    console.log(user)

    ctx.body = user

}

module.exports = { login, registration }
