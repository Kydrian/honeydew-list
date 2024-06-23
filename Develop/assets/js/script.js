// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let formID = document.getElementById('formID');
formID.addEventListener('submit', handleAddTask); // anytime the form is submitted it will run handletask function



// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault(); // prevents the page from reloading when you hit the submit button
const taskTitle = document.getElementById('title').value; // this gives tasktile a value
const taskDueDate = document.getElementById('datePicker').value; // this gives taskduedate a value
const taskDesription = document.getElementById('description').value; // this gives taskdecription 
localStorage.setItem('taskTitle', taskTitle); // this saves the value we entered for tasktitle in local storage
localStorage.setItem('dateDate', taskDueDate);
localStorage.setItem('taskDescription', taskDesription);

console.log('Hello'); 
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
$('#datePicker').datepicker()// this puts the date picker function where we had the date pickerid on the html page
});

