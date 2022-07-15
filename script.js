const list = document.querySelector("ul").value
const input = document.querySelector("input").value
const button = document.querySelector("button").value

function  myFunction() {
const addInput = document.querySelector("input").value
 const input = document.querySelector("input").value = ""
const listItems = document.createElement("li")
const span = document.createElement("span")
const deleteButton = document.createElement("button")

listItems.appendChild(span)
listItems.appendChild(deleteButton)

span.textContent = addInput
deleteButton.textContent = "Delete"
const list = document.querySelector("ul")
list.appendChild(listItems)

deleteButton.addEventListener("click", function() {
    listItems.removeChild(span)
    list.removeChild(listItems)

})
input = document.querySelector("input").focus()
 
 if(addInput == "") {
   listItems.remove()
  }
}

