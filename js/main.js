import { addItem, editItem, getTasks, setupItems } from "./controller.js";
import { cleanInput, displayAlert, showElement } from "./utilities.js";
import { cleanAllItems, deleteItem } from "./view.js";


createTask.addEventListener("submit", addItem);

cleanItemsBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".task--item");
  cleanAllItems(tasksList, items);
});

window.addEventListener("DOMContentLoaded", setupItems);



