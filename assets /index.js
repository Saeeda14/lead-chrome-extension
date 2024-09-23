// Start with an empty leads array
// grab all btns by ID
// take input.value and save it to leads array when the save Input btn is clicked
// Save that data to local storage.
// then we use chrome Apl to save the current tabs when the save tab btn is clicked
// push that to the leads array so that it is displayed
// Save that to local storage
// the delete all btn should clear the input and local Storage 

let leads = []
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")

