const date = document.querySelector("#date");
const taskInput = document.querySelector("#task-input");
const addTask = document.querySelector("#add-task");
const filters = document.querySelectorAll(".filter");
const todoList = document.querySelector("#todo-list");
const todoItem = document.querySelector(".todo-item");
const todoItemText = document.querySelector(".todo-item-text");
const deleteBtn = document.querySelector(".delete-btn");
const emptyState = document.querySelector(".empty-state");
const itemsLeft = document.querySelector("#items-left");
const clearCompletedBtn = document.querySelector("#clear-completed");

//day, month

function showDate() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  let strDate = "";

  let dayIndex = currentDate.getDay();
  console.log(days[dayIndex]);
  let MonthIndex = currentDate.getMonth();
  let dateNum = currentDate.getDate();

  strDate = days[dayIndex] + ", " + month[MonthIndex] + " " + dateNum;

  date.textContent = strDate;
}
// showDate();

function setDate() {
  const options = { weekday: "long", month: "short", day: "numeric" };
  const today = new Date();

  date.textContent = today.toLocaleDateString("en-US", options);
}
setDate();
let todos = [];
let currentFilter = "all";

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo(taskInput.value.trim());
});

function addTodo(input) {
  if (input === "") return;

  // //   console.log(taskInput.value);
  // const li = document.createElement("li");
  // li.classList.add("todo-item");
  // li.textContent = taskInput.value.trim();
  // todoList.appendChild(li);
  // console.log(li);

  // taskInput.value = "";

  const todo = {
    id: Date.now(),
    input,
    completed: false,
  };
  todos.push(todo);

  saveTodos();
  renderTodos();
  taskInput.value = "";
}

function updateItemsCount() {
  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  itemsLeft.textContent = `${uncompletedTodos.length} item${uncompletedTodos.length !== 1 ? "s" : ""} left`;
}

function checkEmptyState() {
  const filteredTodos = filterTodos(currentFilter);
  if (filteredTodos.length === 0) emptyState.classList.remove("hidden");
  else emptyState.classList.add("hidden");
}
function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = filterTodos(currentFilter);

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) todoItem.classList.add("completed");

    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
    });

    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkmark);

    const todoText = document.createElement("span");
    todoText.classList.add("todo-item-text");
    todoText.textContent = todo.input;
    console.log(todo.input);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(checkboxContainer);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
  });
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo(taskInput.value.trim());
});

clearCompletedBtn.addEventListener("click", clearcompleted);

function clearcompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  updateItemsCount();
  checkEmptyState();
}

function loadTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) todos = JSON.parse(storedTodos);
  renderTodos();
  updateItemsCount();
}

window.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  updateItemsCount();
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    setActiveFilter(filter.getAttribute("data-filter"));
  });
});
function setActiveFilter(filter) {
  currentFilter = filter;
  console.log(filter);

  filters.forEach((item) => {
    if (item.getAttribute("data-filter") === filter) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  renderTodos();
}
