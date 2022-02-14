const jwt = require("jsonwebtoken");

async function tokenGenerator(payload, expiresIn) {
    const accessToken = jwt.sign(
        { payload },
        process.env.SECRET_KEY,
        { expiresIn })

    return {accessToken}
}

module.exports = { tokenGenerator }
