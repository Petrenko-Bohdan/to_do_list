import { nanoid } from "../node_modules/nanoid/nanoid.js";

let editElement;
let editFlag = false;
let editID = "";

createTask.addEventListener("submit", addItem);

cleanItemsBtn.addEventListener("click",cleanItems)

function createId() {
  return nanoid();
}

function cleanInput(input){
	input.value = ""
}

function addItem(e) {
  e.preventDefault();

  const inputValue = inputTask.value;
  let id = createId();

  if (inputValue && !editFlag) {
    const element = document.createElement("div");
    element.classList.add("task__item");
		element.id = "taskItem"
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p id="taskTitle" class="task__title">${inputValue}</p>
		<div id="taskBtn" class="task__btn">
			<button id="taskDoneBtn" class="task__done_btn task__btn_size">
				<i class="button__done_icon"></i>
				<p class="button__done-text">Safe</p>
			</button>
			<button id="taskDeleteBtn" class="task__delete_btn task__btn_size"">
				<i class="button__delete_icon"></i>
				<p class="button__delete-text">Delete</p>				
			</button>
		</div>`;

    tasksList.appendChild(element);

    displayAlert("Item added to the list", "success");

		showContainer(tasksContainer, "show")

		cleanInput(inputTask);
  } else if (inputValue && editFlag) {
    console.log("editing");
  } else {
    displayAlert("Please enter value", "error");
  }
}

function displayAlert(text, action) {
  alertInput.textContent = text;
  alertInput.dataset.status = `${action}`;

  setTimeout(function () {
    alertInput.textContent = "";
    alertInput.dataset.status = "";
  }, 1000);
}

function showContainer(component, action){
	component.dataset.status = action
}



// function cleanItems() {
//   const items = document.querySelectorAll(".task__item");
//   if (items.length > 0) {
//     items.forEach(function (item) {
//       tasksList.removeChild(item);
//     });
//   }
// }

