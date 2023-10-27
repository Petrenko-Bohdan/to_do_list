import { cleanInput, createId, displayAlert, showElement } from "./utilities.js";
import { createListItem } from "./view.js";

let editFlag = false
let editID 
export let editElement;



export function addItem(e) {
  e.preventDefault();

  const inputValue = inputTask.value;
  let id = createId();

  if (inputValue && !editFlag) {
    createListItem(id, inputValue);
    displayAlert("Item added to the list", "success");
    showElement(tasksContainer, "show");
    addTask(id, inputValue, "tasksList");
    setBackToDefault();
  } else if (inputValue && editFlag) {
    editElement.innerHTML = inputValue;
    displayAlert("Value changed", "success");
    editTask(editID, inputValue, "tasksList");
    setBackToDefault();
  } else {
    displayAlert("Please enter value", "error");
  }
}

export function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  editElement = e.currentTarget.parentElement.previousElementSibling;
  inputTask.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  editInput.textContent = "Redact";
	inputTask.focus()
}



export function addTask(id, value, list) {
  const inputTask = { id, value };
  let items = getTasks(list);

  items.push(inputTask);
  localStorage.setItem(list, JSON.stringify(items));
}

export function removeTask(id, list) {
  let items = getTasks(list);

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
    displayAlert(`Delete ${item.value}`, "success");
  });
  localStorage.setItem(list, JSON.stringify(items));
}

export function editTask(id, value, list) {
  let items = getTasks(list);
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem(list, JSON.stringify(items));
}

export function getTasks(list) {
  try {
    const storedData = localStorage.getItem(list);
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  } catch (error) {
    console.error(
      "An error occurred while parsing data from localStorage:",
      error
    );
    return [];
  }
}

export function setupItems() {
  let items = getTasks("tasksList");
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    showElement(tasksContainer, "show");
  }
}

export function setBackToDefault() {
	cleanInput(inputTask);
  editFlag = false;
	editID = "";
  editInput.textContent = "Edit";
}