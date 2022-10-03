// VARIABLES
const addButton = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoFilter = document.querySelector('.todo__filter');

addButton.addEventListener('click', addTodo);

function addTodo(e) {
  e.preventDefault();

  if (todoInput.value === '') {
    const alert = document.getElementById('alert');
    alert.innerText = 'please enter new task';

    setTimeout(() => {
      alert.innerText = '';
    }, 3000);
  } else {
    // .1
    let todoLi = document.createElement('li');
    todoLi.classList.add('todo__li');

    // .2
    let todoText = document.createElement('span');
    todoText.innerText = todoInput.value;
    todoText.classList.add('todo__text');

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class='bx bx-check'></i>`;
    checkButton.classList.add('todo__check-btn');

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class='bx bx-trash'></i>`;
    deleteButton.classList.add('todo__delete-btn');

    // .3
    todoLi.appendChild(todoText);
    todoLi.appendChild(checkButton);
    todoLi.appendChild(deleteButton);

    // .4
    todoList.appendChild(todoLi);
    todoInput.value = '';

    // .5
    deleteButton.addEventListener('click', () => {
      todoLi.classList.add('todo__fall');
      todoLi.addEventListener('transitionend', () => {
        todoLi.remove();
      });
    });

    // .6
    checkButton.addEventListener('click', () => {
      todoLi.classList.toggle('todo__check');
    });

    // .7
    todoFilter.addEventListener('click', (e) => {
      const todos = todoList.childNodes;
      todos.forEach(() => {
        switch (e.target.value) {
          case 'all':
            todoLi.style.display = 'flex';
            break;

          case 'completed':
            if (todoLi.classList.contains('todo__check')) {
              todoLi.style.display = 'flex';
            } else {
              todoLi.style.display = 'none';
            }
            break;

          case 'uncompleted':
            if (!todoLi.classList.contains('todo__check')) {
              todoLi.style.display = 'flex';
            } else {
              todoLi.style.display = 'none';
            }
            break;
        }
      });
    });
  }
}


