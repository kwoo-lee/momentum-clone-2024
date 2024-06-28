const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleDeleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != li.id);
  todoList.removeChild(li);
  saveToDos();
}

function paintToDo(todo) {
  const todoItem = document.createElement("li");
  todoItem.id = todo.id;

  const todoSpan = document.createElement("span");
  todoSpan.innerText = todo.text;
  todoItem.appendChild(todoSpan);

  const todoBtn = document.createElement("button");
  todoBtn.innerText = "❌";
  todoBtn.addEventListener("click", handleDeleteTodo);
  todoItem.appendChild(todoBtn);

  todoList.appendChild(todoItem);

  todos.push(todo);
  saveToDos();
}

function handleTodoSummit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  paintToDo(newTodoObj);
}

todoForm.addEventListener("submit", handleTodoSummit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(paintToDo);
}
