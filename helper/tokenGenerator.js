const jwt = require("jsonwebtoken");

function tokenGenerator(payload, expiresIn) {
    return jwt.sign(
        { payload },
        process.env.SECRET_KEY,
        { expiresIn })
}

module.exports = { tokenGenerator }
