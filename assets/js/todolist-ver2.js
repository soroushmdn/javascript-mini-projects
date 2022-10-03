// 1. getting all required elements (variables)
let textarea = document.querySelector('textarea');
let todoList = document.querySelector('ul');
let pendingTask = document.querySelector('.todo__pending span');
let clearButton = document.querySelector('.todo__pending button');

// 4. we will call this function while adding , deleting , checking , unchecking the li
function alltasks() {
  let checkTasks = document.querySelectorAll('.pending');
  if (checkTasks.length === 0) {
    pendingTask.textContent = 'no';
  } else {
    pendingTask.textContent = checkTasks.length;
  }

  let allLi = document.querySelectorAll('li');
  if (allLi.length > 0) {
    todoList.style.marginTop = '2rem';
    clearButton.style.pointerEvents = 'auto';
  } else {
    todoList.style.marginTop = '0';
    clearButton.style.pointerEvents = 'none';
  }
}

// 2. add task when we put value in textarea
textarea.addEventListener('keyup', (e) => {
  let textareaValue = textarea.value.trim(); // Trim() removes space befor and after input value

  // if enter button on keyboard clicked and input value length is greater than 0 =>
  if (e.key === 'Enter' && textareaValue.length > 0) {
    let li = `<li class="todo__li" >
   <input type="checkbox" class="pending" onclick="checkboxClick(this)"/>
   <span>${textareaValue}</span>
   <i class="bx bx-trash" onclick="deleteTask(this)"></i>
   </li>`;

    // insert li  inside ul(todo list)
    todoList.insertAdjacentHTML('beforeend', li);

    // remove value from textarea
    textarea.value = '';

    alltasks();
  }
});

// 3. checking and unchecking the checkbox while we click on the li
function checkboxClick(e) {
  e.classList.toggle('pending');
  alltasks();
}

// 5. deleting task while we click on the delete icon
function deleteTask(e) {
  e.parentElement.remove();
  alltasks();
}

// 6. deleting all the li while we click on clear button
clearButton.addEventListener('click', () => {
  todoList.innerHTML = '';
  alltasks();
});
