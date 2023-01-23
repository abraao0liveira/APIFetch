const url = "https://api.github.com/users"

// GET 
function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

// GET com parametros
function getUser(){
    fetch(`${url}/abraao0liveira`)
    .then(response => response.json())
    .then(data => {
        userLogin.textContent = data.login
        userAvatar.src = data.avatar_url
    })
    .catch(error => console.error(error))
}

// POST
function addUser(newUser){
    fetch(url, {
        method: "POST", // definindo o metodo usado.
        body: JSON.stringify(newUser), // transformando o dado de json para texto simples
        headers: {
            "Content-type": "application/json charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}
const newUser = {
    login: "Sophie Hatter",
    avatar_url: "https://thicc.mywaifulist.moe/waifus/18127/7b673b37bc9076e7872b5259d5a61c7bf067c8ffb37a39409578fbe58c6cb9ab_thumb.jpg"
}

// PUT
function updateUser(updatedUser){
    fetch(`${url}/abraao0liveira`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}
const updatedUser = {
    login: "Howl Jenkins",
    avatar_url: "https://i.pinimg.com/564x/e2/9c/d3/e29cd3781b81ff5ea769087761a55255.jpg"
}

// DELETE
function deleteUser(id){
    fetch(`${url}/{id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

getUsers()
getUser()
//addUser(newUser)
//updateUser()
//deleteUser(10)
