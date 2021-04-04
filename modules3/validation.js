module.exports = (user, method, allUsers) => {

    let status = {error: false, message: null}

    const lengthValidate = (item, itemName) =>  {
        let status = null

        if(item.length > 20) {
            status = itemName + "is too long"
        }
        if(item.length < 3) {
            status = itemName + "is too short"
        }

        return !!status ? status : false
    }
        //name length validation
    const nameValidation = lengthValidate(user.username, 'username')
    if(nameValidation) {
        status.error = true
        status.message = nameValidation
    }
        //pass length validation
    const passwordValidation = lengthValidate(user.password1, 'password')
    if(passwordValidation) {
        status.error = true
        status.message = passwordValidation
    }
        //pass match validation
    if (method === "register") {
        if (user.password1 !== user.password2) {
            status.error = true
            status.message = "passwords does not match"
        }
        const checkIfExists = allUsers.filter(x => x.username === user.username)

        if(checkIfExists.length > 0 ) {
            status.error = true
            status.message = "user already exists"
        }

    }


    console.log(status)

    if (method === "login") {
        const exist = allUsers.filter(x => x.username === user.username && x.password1 === user.password1)
        if (exist.length === 0) {
            status = {error: true, message: "user was not found"}
        }
    }

    return status

}