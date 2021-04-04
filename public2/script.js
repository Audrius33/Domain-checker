let createTitle = document.getElementById("create-Title")
let description = document.getElementById("description")
let image = document.getElementById("upload-image")
let button = document.getElementById("UploadBtn")
let main = document.getElementsByClassName("main")
let closeWindow = document.getElementsByClassName("post-section")
let openUpdateWindows = document.getElementsByClassName("openModal")
let id
button.addEventListener("click", createPost)

fetch('http://localhost:3000/getData')
    .then(res => res.json())
    .then(data => renderHtml(data))

function createPost() {
    const user = {
        title: createTitle.value,
        description: description.value,
        image: image.value,
    }
    fetch('http://localhost:3000/post', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            renderHtml(data)


        })

}

function deletePost(e) {
    fetch(`http://localhost:3000/deletePost/${e.target.id}`)
        .then(res => res.json())
        .then(data => {
            renderHtml(data)

        })
}

function updatePost(e) {
    console.log(e.target.id)
    id = e.target.id
    closeWindow[0].style.display = "none"
    openUpdateWindows[0].style.display = "flex"
    openUpdateWindows[0].style.flexWrap = "wrap"
    openUpdateWindows[0].innerHTML = `
        <div>
        <div class="updatePost">
        <div class="mb-5">
            <label class="m-10" for="update-Title">Title:</label>
            <input type="text" id="update-Title" name="title">
        </div>
        <div class="mb-5">
            <label class="m-11" for="update-description">Description:</label>
            <input type="text" id="update-description" name="description">
        </div>
        <div class="mb-5">
            <label for="upload-image-new">Upload Image:</label>
            <input type="text" id="upload-image-new" name="image" alt="">
        </div>
        <button class="m-5" id="UpdateButton">Update</button>
    </div>
        </div>
        `
    valueUpdate()


}

function renderHtml(data) {
    console.log(data)
    main[0].innerHTML = ''

    data.map((item, index) => {

        main[0].innerHTML += `
         <div style="width: 200px; height: 680px; margin: 10px; background-color: #c45757; overflow: hidden; padding: 10px">
           <img src="${item.image}" alt="">
           <h4>${item.title}</h4>
           <p>${item.description}</p> 
           <button class="updateBtn" id="${index}">Edit</button>
           <button class="deleteInfo" id="${index}">Delete</button>
          
         </div>
         `
    })
    data.map((item, index) => {
        let deleteBtn = document.getElementsByClassName("deleteInfo")
        let updateBtn = document.getElementsByClassName("updateBtn")
        deleteBtn[index].addEventListener("click", deletePost)
        updateBtn[index].addEventListener("click", updatePost)
    })

}

function valueUpdate() {
    let buttonUpdateValue = document.getElementById("UpdateButton")
    buttonUpdateValue.addEventListener("click", updatePosts)

}

function updatePosts() {
    console.log(id)
    let updateTitle = document.getElementById("update-Title")
    let updateDescription = document.getElementById("update-description")
    let updateImage = document.getElementById("upload-image-new")


    const user = {
        title: updateTitle.value,
        description: updateDescription.value,
        image: updateImage.value,
        id: id,
    }
    fetch(`http://localhost:3000/updatePost/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderHtml(data)
        })

}