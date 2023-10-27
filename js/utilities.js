import { nanoid } from "../node_modules/nanoid/nanoid.js";


export let editID = "";
let editFlag 

export function createId() {
  return nanoid();
}

export function cleanInput(input) {
  input.value = "";
}

export function displayAlert(text, action) {
  alertInput.textContent = text;
  alertInput.dataset.status = `${action}`;

  setTimeout(function () {
    alertInput.textContent = "";
    alertInput.dataset.status = "";
  }, 1500);
}

export function showElement(component, action) {
  component.dataset.status = action;
}
