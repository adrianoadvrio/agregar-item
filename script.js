
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault() // do not send to another direction e = event
    createItem(ourField.value)
})

function createItem(x) {  // x = outField.value as a Parameter
  
ourList.insertAdjacentHTML("beforeend", x)

}