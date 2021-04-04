const domain = document.getElementById('domain')
const search = document.getElementById('search')
const errorText = document.getElementById('error')
const domainInfo = document.getElementById('innerText')

search.onclick = async () => {
    let value = domain.value

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({value})
    }

    let res = await fetch("http://localhost:3000/checkDomain", options)
    let data = await res.json()

    if (data.error) {
        errorText.style.display = 'block'
        return errorText.innerText = 'This domain name is not valid'
    } else {
        errorText.style.display = 'none'
    }
    console.log(data.log)

    for (let i = 0; i < data.log.length; i++) {
        domainInfo.style.height = "500px"
        const color = data.status[i] === 'Available' ? 'green' : 'red'
        const date = new Date(data.log[i].time).toLocaleTimeString()
        domainInfo.innerHTML +=
            `<div style="margin: 20px">
                <div>${data.log[i].name}</div>
                <div>${date}</div>
                <div style="${color}">${data.log[i].status}</div>
                <div>${data.log[i].expire}</div>
            </div>`
    }



}





