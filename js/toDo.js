const form = document.querySelector(".js-to-do"),
  input = document.querySelector(".js-add-to-do"),
  list = document.querySelector(".js-list");

function addToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__button";
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(deleteBtn);
  toDo.appendChild(label);
  list.appendChild(toDo);
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(value);
}

function loadToDos() {
  const toDos = localStorage.getItem("toDos");
  if (toDos === null) {
    const parsedToDos = JSON.parse(toDos);
  }
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
