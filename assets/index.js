// Start with an empty leads array
// grab all btns by ID
// create a dynamic function that will render out items from arrays to the input el
// take input.value and save it to leads array when the save Input btn is clicked
// Save that data to local storage.
// then we use chrome Apl to save the current tabs when the save tab btn is clicked
// push that to the leads array so that it is displayed
// Save that to local storage
// the delete all btn should clear the input and local Storage 

let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")
const ulEl = document.querySelector("#ul-el")
const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))

if (localStorageLeads) {
  myLeads = localStorageLeads
  render(myLeads)
}

function render(leads) { 
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    listItems += 
    `<li> 
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]} 
        </a>
    </li>`
  }
  ulEl.innerHTML = listItems
}

inputBtn.addEventListener ("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

tabBtn.addEventListener ("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
});

deleteBtn.addEventListener ("click", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})