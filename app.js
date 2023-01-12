const template = document.querySelector("template").content
const body = document.querySelector("body")


function apiFetch (pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(res =>   res.json())

    .then(data => pintarPokemo(data))
}
   
function pintarPokemo(data){
template.querySelector("img").setAttribute("src",data.sprites.front_default)
template.querySelector(".nombre").textContent = data.name

const clone = document.importNode(template,true)
body.appendChild(clone)
}

apiFetch(150)