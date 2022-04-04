let count = 0;

let fortunearray = []

function getRandomFortune() {
    fetch('http://localhost:8080/api/fortune')
        .then(resp => resp.json())
        .then(json => fortunearray.push(json.fortune))
}

function getShortFortune() {
    fetch('http://localhost:8080/api/short')
        .then(resp => resp.json())
        .then(json => console.log(json.fortune))
}

function getShowerThoughtFortune() {
    fetch('http://localhost:8080/api/showerthought')
        .then(resp => resp.json())
        .then(json => console.log(json.fortune))
}

function getTraditionalFortune() {
    fetch('http://localhost:8080/api/traditional')
        .then(resp => resp.json())
        .then(json => console.log(json.fortune))
}

let list = document.getElementById('fortunelist')
console.log(list)

function expandlist() {
    let li = document.createElement("li")
    li.innerText = fortunearray.lastIndexOf(1)
    list.appendChild(li)

}

let randombtn = document.querySelector("#random")

let shortbtn = document.querySelector("#short")

let showerbtn = document.querySelector("#shower")

let traditionalbtn = document.querySelector('#traditional')

randombtn.addEventListener("click", () => {
    getRandomFortune()
    expandlist()
})

shortbtn.addEventListener("click", () => {
    getShortFortune()
    expandlist()
})

showerbtn.addEventListener("click", () => {
    getShowerThoughtFortune()
})

traditionalbtn.addEventListener("click", () => {
    getTraditionalFortune()
})