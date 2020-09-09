// SELECT ITEMS
const alert = document.querySelector('.alert');
const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('.task-input');
const filterForm = document.querySelector('.filter-form')
const filterInput = document.querySelector('.filter-input')
const addBtn = document.querySelector('.add-btn');
const taskGroup = document.querySelector('.task-group');
const taskList = document.querySelector('.task-list');
const clearBtn = document.querySelector('.clear-task');
const tip = document.querySelector('.tool-tip');
const confirmClearPositive = document.querySelector('.clear-all-tasks');
const confirmClearNegative = document.querySelector('.keep-all-tasks');
const clearTip = document.querySelector('.clear-tip');

// EDIT and FILTER OPTION
let editElement;
let editFlag = false;
let editId = "";
let filterFlag = false;


// EVENT LISTENERS
// submit form
taskForm.addEventListener('submit', addItem)

// options to clear all tasks or keep them
clearBtn.addEventListener('click', clearOptions)
// confirm clear all tasks
confirmClearPositive.addEventListener('click', clearTasks);
// confirm do not clear all tasks
confirmClearNegative.addEventListener('click', keepTasks);


// FUNCTIONS
// add item function
function addItem(e) {
    const value = taskInput.value
    const id = new Date().getTime().toString();
    let i = 0; 
    if (value && !editFlag) {

        // create list item
        const listItem = document.createElement('li')


        // add class
        listItem.classList.add('task')


        // add id attribute
        const attr = document.createAttribute('data-id');
        attr.value = id;
        listItem.setAttributeNode(attr);
        listItem.innerHTML =
            `${value} <div class="options">
        <div class="remove-task edit-task">
        <input type="button" value="Add task" class="btn fa fa-pen"/>
        </div>
        <div class="remove-task">
        <input type="button" value="Add task" class="btn fa fa-times"/>
        </div>
        </div>`


        // append child to list
        taskList.appendChild(listItem);


        //display alert
        displayAlert('new item added to the list', 'success');


        //show list
        taskGroup.style.display = 'flex';


        // Show filter input when the tasks get to five
        if(taskList.children.length >= 5){
            filterForm.style.display = 'flex'
            displayTip()
        };


        // show clear button
        if (taskList.children.length = 1){
            clearBtn.style.display = 'flex';
        }


        // add to local storage
        addToLocalStorage(id,value);


        // set back to default
        setBackToDefault()
    }

    else if (value && editFlag) {
        console.log('no');
    }

    else {
        displayAlert('please enter value', 'danger')
    }

    e.preventDefault()
}
// end of add item function

// clear all tasks function
function clearOptions() {
    clearTip.classList.add('active')
}
//confrim choice functions
    // clear
function clearTasks(){
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
        clearBtn.style.display = 'none';
    }
    filterForm.style.display = 'none';
    clearTip.classList.remove('active');
    // localStorage.removeItem('list')
    setBackToDefault();
}
    // keep
function keepTasks(){
    clearTip.classList.remove('active')
}


// Display alert for filter
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert 
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 2000)
}





// set back to default
function setBackToDefault(){
    taskInput.value = "";
    editFlag = false;
    editId = "";
    addBtn.innerHTML = '<i class="fa fa-pen"></i>'
}



// LOCAL STORAGE
function addToLocalStorage(id, value){
    console.log('added to local storage')
}


// DISPLAY NOTIFICATION
function displayTip() {
    tip.classList.add('active')

    // tip.style.display = 'block';
    // setInterval(() => {
    //     tip.style.display = 'block'
    // }, 1000);

    setTimeout(() => {
        tip.classList.remove('active')
    }, 7000)
}

