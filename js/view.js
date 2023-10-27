import { displayAlert, showElement } from "./utilities.js";
import { editItem, removeTask, setBackToDefault } from "./controller.js";



export function cleanAllItems(list, items) {
  if (items?.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      displayAlert("CLEAN ITEMS", "success");
      showElement(cleanItems, "");
    });
		setBackToDefault();
		localStorage.removeItem("tasksList");
  }
}

export function deleteItem(list, element) {
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    showElement(cleanItems, "");
  }
  setBackToDefault();
  removeTask(id, "tasksList");
}

export function createListItem(id, inputValue) {
  const element = document.createElement("div");
  element.classList.add("task--item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p id="taskTitle" class="task--title">${inputValue}</p>
	<div id="taskBtn" class="task--btn">
		<button id="taskEditBtn" class="task--edit_btn task--btn_size">
			<i class="button--edit_icon"></i>
			<p class="button--edit-text">Edit</p>
		</button>
		<button id="taskDeleteBtn" class="task--delete_btn task--btn_size"">
			<i class="button--delete_icon"></i>
			<p class="button--delete-text">Delete</p>				
		</button>
	</div>`;

  const editBtn = element.querySelector(".task--edit_btn");
  const deleteBtn = element.querySelector(".task--delete_btn");

  editBtn.addEventListener("click", editItem);

  deleteBtn.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    deleteItem(tasksList, element);
  });

  tasksList.appendChild(element);

  showElement(cleanItems, "show");
}