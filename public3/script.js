const loginBtn = document.getElementById("loginBtn")
const loginName = document.getElementsByClassName("loginName")
const loginPass = document.getElementsByClassName("loginPass")
const logError = document.getElementById("logError2")
const registrationS = document.getElementsByClassName("registration")
const login = document.getElementsByClassName('login')
const registerHide = document.getElementsByClassName("register-z")
const showAllCards = document.getElementsByClassName("btn2")
const cards = document.getElementsByClassName("cards")
const showButton = document.getElementsByClassName("buttonShow")
const logOut = document.getElementById("logOut")
let user

logOut.onclick = () => {
    localStorage.removeItem('secret')
    location.reload()
}

showAllCards[0].addEventListener("click", showCards)

function registration() {
    let showRegister = document.getElementsByClassName('register-z')

    let regError = document.getElementById("regError")
    let username = document.getElementById("t3")
    let password1 = document.getElementById("t4")
    let password2 = document.getElementById("t5")
    let user = {
        username: username.value,
        password1: password1.value,
        password2: password2.value,

    }


    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.secret)
            if (data.error) {
                regError.innerText = data.message
            } else {
                registrationS[0].style.display = "none"
                login[0].style.display = "block"
                showRegister[0].style.display = "block"

            }
        })

}

function clearFunc() {
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
}

function clearFunc2() {
    document.getElementById("t6").value = "";
    document.getElementById("t7").value = "";

}

loginBtn.onclick = () => {
    let user = {
        username: loginName[0].value,
        password1: loginPass[0].value,

    }
    console.log(user)

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                logError.innerText = data.message
            } else {
                localStorage.setItem('secret', data.secret)
                registrationS[0].style.display = "none"
                login[0].style.display = "none"
                registerHide[0].style.display = "none"
                showButton[0].style.display = "flex"

            }
        })

}

const rent = (e) => {
    console.log(e.target.attributes[1].value)
    console.log(e.path[2].id)

    let id = e.path[2].id
    let time = e.target.attributes[1].value
    let secret = localStorage.getItem('secret')

    fetch(`http://localhost:3000/rent/${id}/${time}/${secret}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showCards(data.prods)
        })

}

function showCards(e) {
    console.log(e)
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/JSON"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            function countTime(string) {
                setTimeout(() => {
                    return new Date(data.rentTill).toLocaleTimeString()
                }, 1000)
            }


            cards[0].innerHTML = ""
            cards[0].style.display = "flex"
            cards[0].style.flexWrap = "wrap"
            cards[0].style.justifyContent = "center"
            cards[0].style.overflow = "auto"


            for (let i = 0; i < data.length; i++) {
                console.log(data[i].rentTill)
                let show = data[i].rentTill < Date.now()
                console.log(data[i].title)
                cards[0].innerHTML += `
                    <div id=${data[i].id} style="display: flex; flex-direction: column; margin: 10px" >
                        <p>${data[i].title}</p>
                        <img style="width: 200px; height: 200px" src="${data[i].image}" alt="">
                        <div class="showButtons" style="display: ${show ? 'block' : 'none'}">
                        <button style="margin: 5px" prop="30">30s</button>
                        <button style="margin: 5px" prop="1">1min</button>
                        <button style="margin: 5px" prop="3">3min</button>
                        </div>
                        
                        <div style="display: ${!show ? 'block' : 'none'}">
                            Product is rented by: ${data[i].rentedBy}
                        </div>
                        <div>
                            Product is rented till: ${new Date().toLocaleTimeString()}
                        </div>
                        
                </div>`
            }
            let buttons = document.querySelectorAll('button')
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener("click", rent)
            }

        })
}

const checkSecret = () => {
    let secret = localStorage.getItem('secret')

    if (!!secret) {
        console.log('secret yra')
        fetch('http://localhost:3000/prods/' + secret)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    } else {
        console.log('secret nera')
    }
}

checkSecret()








