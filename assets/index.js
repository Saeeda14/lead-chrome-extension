// Start with an empty leads array
// grab all btns by ID
// create a dynamic function that will render out items from arrays to the input el
// take input.value and save it to leads array when the save Input btn is clicked
// Save that data to local storage.
// then we use chrome Apl to save the current tabs when the save tab btn is clicked
// push that to the leads array so that it is displayed
// Save that to local storage
// the delete all btn should clear the input and local Storage 

let noteEntries = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")
const ulEl = document.querySelector("#ul-el")
const localStorageLeads = JSON.parse(localStorage.getItem("myEntries"))

if (localStorageLeads) {
  noteEntries = localStorageLeads
  render(noteEntries)
}

function render(entries) { 
  let listItems = ""
  for (let i = 0; i < entries.length; i++) {
    listItems += 
    `<li> 
        <a target='_blank' href='${entries[i]}'>
        ${entries[i]} 
        </a>
    </li>`
  }
  ulEl.innerHTML = listItems
}

inputBtn.addEventListener ("click", function () {
  noteEntries.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myEntries", JSON.stringify(noteEntries))
  render(noteEntries)
})

tabBtn.addEventListener ("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true}, function(tabs) {
    noteEntries.push(tabs[0].url)
    localStorage.setItem("myEntries", JSON.stringify(noteEntries))
    render(noteEntries)
  })
});

deleteBtn.addEventListener ("click", function() {
  localStorage.clear()
  noteEntries = []
  render(noteEntries)
})