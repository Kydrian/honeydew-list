
let taskList = JSON.parse(localStorage.getItem("tasks")); 
let nextId = JSON.parse(localStorage.getItem("nextId"));
const formID = document.getElementById('formID');
formID.addEventListener('submit', handleAddTask); // anytime the form is submitted it will run handletask function



// Todo: create a function to generate a unique task id
function generateTaskId() {
    return crypto.randomUUID();
}
    
// Todo: create a function to create a task card
function createTaskCard(taskList) {
    const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-task-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(taskList.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(taskList.description);
  const cardDueDate = $('<p>').addClass('card-text').text(taskList.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-task-id', task.id);
  cardDeleteBtn.on('click', handleDeleteTask);


  if (project.dueDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');

    // ? If the task is due today, make the card yellow. If it is overdue, make it red.
    if (now.isSame(taskDueDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }
  }



  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  return taskCard;
}
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
$("#draggable").draggable();
}







// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault(); // prevents the page from reloading when you hit the submit button
const taskTitle = document.getElementById('title').value; // this gives tasktile a value
const taskDueDate = document.getElementById('datePicker').value; // this gives taskduedate a value
const taskDescription = document.getElementById('description').value; // this gives taskdecription 


const newTask = { // this makes an object of the values we have assigned
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription
};

const tasks = []
tasks.push(newTask) // this pushes the object into the array

localStorage.setItem('tasks', JSON.stringify(tasks)); // this stringify's the object into a string in local storage.

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
        const taskId = $(event.target).data('task-id');
        tasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTaskList();
      
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskId = ui.draggable.attr('data-task-id');
    const newStatus = $(event.target).attr('id');
  
    for (let task of tasks) {
      if (task.id === taskId) {
        task.status = newStatus;
        break;
      }
    }
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList();
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$('#datePicker').datepicker()// this puts the date picker function where we had the date picker id on the html page

});

