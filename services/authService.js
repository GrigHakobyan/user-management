const fakeDB = require('../helper/fakeDB')
const {HttpError} = require("../helper/httpErrors");

async function loginByUsername(username, password){
    const user = fakeDB.users.find(user => user.username === username && user.password === password)

    if(!user) {
        return HttpError(`User by username ${username} not found`)
    }

    return user
}

async function registerUser({username, password, email}) {
    if (!username.trim() || !password.trim() || !email.trim()){
        return HttpError("User data not valid")
    }

    const user = fakeDB.users.find(user => user.username === username || user.email === email)

    if(user) {
        return HttpError("User Already Exist")
    }

    return {username, password, email}
}


module.exports = { loginByUsername, registerUser }
