const generateInfo = document.getElementById("genButton")
const card = document.getElementById('source')
generateInfo.addEventListener("click", fetchData)

function fetchData() {
    fetch('http://localhost:3000/home' )
        .then(res => res.json())
        .then(data => {
         generateAll(data)
            }
         )
}

function generateAll(data) {
    console.log(data)
    card.innerHTML = ""
    card.innerHTML = `
    <div style="display: flex; align-items: center; flex-direction: column">
        <img style="width: 200px; height: 300px" src="${data.randomImage}" alt="">
        <h4>${data.username}</h4>
        <span>${data.userEmail}</span>
        <p>${data.description}</p>
        <p>${data.genNumber}</p>

    </div>
          `
}


