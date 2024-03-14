const todoForm = document.querySelector(".todo-form");

const todoInput = document.querySelector(".todo-input");

const todoItemsList = document.querySelector(".todo-items");


let todos = [];

todoForm.addEventListener('submit',function(event) {

    event.preventDefault();

    addTodo(todoInput.value);

});


const addTodo = item => {

    if(item !== ''){

        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        }

        todos.push(todo)

        addToLocalStorage(todos)

        

        todoInput.value = ''

    }
    
}

const renderTodos = todosArray => {

    todoItemsList.innerHTML = '';

    todosArray.map(elementNiza => {

        const checked = elementNiza.completed ? 'checked' : null;

        const li = document.createElement('li');

        li.setAttribute("class","item");
        li.setAttribute("data-key",elementNiza.id);

        if(elementNiza.completed === true){

            li.classList.add('checked')
        }
        li.innerHTML = `
        
        <input type="checkbox" class="checkbox" ${checked}>
        ${elementNiza.name}
        <button class="delete-button">X</button>

        `
        todoItemsList.appendChild(li)

    })


}

const addToLocalStorage = todosArray => {

    localStorage.setItem('todos',JSON.stringify(todosArray));

    renderTodos(todosArray)
}

const getFromLocalStorage = () => {


    const reference = localStorage.getItem('todos')

    if(reference){

        todos = JSON.parse(reference);

        renderTodos(todos)
    }

}

const toogle = id => {
    todos.map(elementNiza => {


        if(elementNiza.id == id){


            elementNiza.completed = !elementNiza.completed;

        }
    })
    addToLocalStorage(todos)
}


const deleteTodo = id => {

    todos = todos.filter(function(elementNiza){
        return elementNiza.id != id
    })

    addToLocalStorage(todos);

}

getFromLocalStorage();

todoItemsList.addEventListener('click',function(event){

        if(event.target.type == 'checkbox'){
            toogle(event.target.parentElement.getAttribute('data-key'))
        }


        if(event.target.classList.contains('delete-button')){
            
            deleteTodo(event.target.parentElement.getAttribute('data-key'));
        }


})



