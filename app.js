// Define UI vars

const form = document.querySelector('.form-group');
const taskInput = document.getElementById('inputLarge');
const taskList = document.querySelector('table');

// Load all event listeners
loadAllEventListeners();

function loadAllEventListeners() {
  // Add task
  form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
  e.preventDefault();
  if(taskInput.value === '') {
    alert("Add a task");
  }
  // create tbody
  const tBody = document.createElement('tbody');

  // create tr element
  const tr = document.createElement('tr');
  tr.className = 'table-light';

  // create check-box icon
  const tdCheckBox = document.createElement('td');
  tdCheckBox.className = 'text-right';
  tdCheckBox.innerHTML = '<i class="fas fa-check-circle " style="font-size: 24px; color: #17a2b8;"></i>';
  tr.appendChild(tdCheckBox);

  // create field with task 
  const tdTask = document.createElement('td');
  tdTask.className = 'text-left';
  tdTask.appendChild(document.createTextNode(taskInput.value));
  tr.appendChild(tdTask);

  // create delete icon
  const tdDelete = document.createElement('td');
  tdDelete.className = 'text-right';
  tdDelete.innerHTML = '<i class="fas fa-times" style="font-size: 24px; color: #17a2b8;"></i>';
  tr.appendChild(tdDelete);

  // add new td to task list
  tBody.appendChild(tr);
  console.log(tr);

  // add new row to table body
  taskList.appendChild(tBody)
  
  // clear the input
  taskInput.value = '';
}
