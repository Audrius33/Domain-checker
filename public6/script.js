let userName = document.getElementById('userName')
let submit = document.getElementById('submit')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')


submit.onclick = () => {

    let user = {
        name: userName.value,
        password: password.value,
        password2: password2.value
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    fetch("http://localhost:3000/user", options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


}