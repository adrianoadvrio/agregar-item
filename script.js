
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
    e.preventDefault() // do not send to another direction e = event
    createItem(ourField.value)
})

function createItem(x) {  // x = outField.value as a Parameter
  let outHTML = `<li style ="padding:10px">${x}<button onclick = "deleteItem(this)" style ="position:relative; left:10px;" >borrar</button></li>`
ourList.insertAdjacentHTML("beforeend", outHTML)
ourField.value = ""
ourField.focus()
}

function deleteItem(elementToDelete){
elementToDelete.parentElement.remove()
} 