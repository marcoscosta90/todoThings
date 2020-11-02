var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todoThings =JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    
    for(todo of todoThings){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');

    var pos = todoThings.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');

    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todoThings.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


function deleteTodo(pos){
    todoThings.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todoThings));
}
