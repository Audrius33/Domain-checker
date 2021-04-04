//show objects in a sync
// get delay time in async
// 3buttons
// one has value10s
// second has value 20s
// third has value 3s
// each button should represent how long backend delay the response

const btn = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const cards = document.getElementsByClassName("cards")
let buttonPlace

function getData(url) {
    return new Promise(resolve => {
        fetch('http://localhost:3000/' + url)
            .then(res => res.json())
            .then(data => resolve(data))
    })

}

btn.onclick = async (e) => {
    buttonPlace = e.target.innerText
    console.log(e.target.innerText * 1000)

    setTimeout(() => {
        alert("hello")
    }, Number(buttonPlace) * 5000)

    const num = await getData('random')
    const choosePic = await getData(`photo/${num.random}`)
    const comArr = await getData(`string/${num.random}`)
    console.log(num)
    console.log(choosePic)
    console.log(comArr)
    cards[0].innerHTML = `
        <div id="">
            <img src="${choosePic.choosePic}" alt="">
            <p>${comArr.chooseCom}</p>
        </div>
        `
}






