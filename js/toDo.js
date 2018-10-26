const form = document.querySelector(".js-to-do"),
  input = document.querySelector(".js-add-to-do"),
  list = document.querySelector(".js-list");

let toDos = [];

function saveToDo(text) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text
  };
  toDos.push(toDoObject);
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

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
  saveToDo(value);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    toDos = parsedToDos;
    toDos.forEach(function(toDo) {
      addToDo(toDo.value);
    });
  }
  return;
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
