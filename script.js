var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todoThings = [
'Fazer cafe', 
'Estudar Javascript',
'Trabalhar'
];

function renderTodos(){
    listElement.innerHTML = '';
    
    for(todo of todoThings){
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todoThings.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

