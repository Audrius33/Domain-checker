let name = document.getElementById('name')
let city = document.getElementById('city')
let age = document.getElementById('age')
let gender = document.getElementById('gender')
let skinColor = document.getElementById('skinColor')
let send = document.getElementById('send')
let update = document.getElementById('update')
let newName = document.getElementById('newName')
let userId = document.getElementById('userId')

send.onclick = () => {
    let user = {
        name: name.value,
        city: city.value,
        age: age.value,
        gender: gender.value,
        skinColor: skinColor.value,
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    fetch("http://localhost:3000/createUser", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

let find = document.getElementById('find')

find.onclick = () => {
    fetch('http://localhost:3000/findUser/audrius')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

update.onclick = () => {
    const creds = {
        name: newName.value,
        id: userId.value
    }
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creds)
    }
    fetch('http://localhost:3000/updateName', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}