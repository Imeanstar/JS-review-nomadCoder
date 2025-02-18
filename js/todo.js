const TODOS_KEY = 'todos';

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    const liId = li.id;


    for(let i = 0 ; i < todos.length ; i++){
        if(todos[i].id == liId){
            todos = todos.filter((e) => e !== todos[i]);
            console.log(todos);
            console.log(todos[i].id);
            console.log(liId);
            if(todos[i].id == liId){
                console.log("they are same");
            }
        }
    }
    saveTodos();

    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObject = {
        id : Date.now(),
        text : newTodo,
    }
    todos.push(newTodoObject);
    saveTodos();
    paintTodo(newTodoObject);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo);
    todos = parsedTodos;
}