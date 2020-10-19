// Define UI vars

const form = document.querySelector('.form-group');
const taskInput = document.getElementById('inputLarge');
const taskList = document.querySelector('tbody');
console.log(taskList);

// Load all event listeners
loadAllEventListeners();

function loadAllEventListeners() {
  // Add task
  form.addEventListener('submit', addTask);
  // Remove Task
  taskList.addEventListener('click', removeTask);
  // Done Task
  taskList.addEventListener('click', doneTask);
}

// Add task
function addTask(e) {
  e.preventDefault();
  if(taskInput.value === '') {
    alert("Add a task");
  }

  // create table-row element
  const tr = document.createElement('tr');
  tr.className = 'table-light';

  // create check-box icon
  const tdCheckBox = document.createElement('td');
  tdCheckBox.className = 'text-right check-item';
  tdCheckBox.innerHTML = '<i class="fas fa-check-circle"></i>';
  tr.appendChild(tdCheckBox);

  // create field with task 
  const tdTask = document.createElement('td');
  tdTask.className = 'text-left';
  tdTask.appendChild(document.createTextNode(taskInput.value));
  tr.appendChild(tdTask);

  // create delete icon
  const tdDelete = document.createElement('td');
  tdDelete.className = 'text-right delete-item';
  tdDelete.innerHTML = '<i class="fas fa-times"></i>';
  tr.appendChild(tdDelete);

  // add new td to task list
  taskList.appendChild(tr);
  
  // clear the input
  taskInput.value = '';
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Check Done Task
function doneTask(e) {
  if(e.target.parentElement.classList.contains('check-item')) {
    document.querySelector('.fa-check-circle').classList.add('done');
  }
}

