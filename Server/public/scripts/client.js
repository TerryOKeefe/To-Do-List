console.log('JS Loaded!');

$(document).ready(readyNow);

// on document ready start readyNow
function readyNow() {
    // console log to show jQuery loaded
    console.log('jQuery Loaded!');
    // call getList go append DB to DOM
    getList();
    
    // click Listener for submit button
    $('#submitBtn').on('click', postList);

    // click listener for dynamic delete button
    $('#itemList').on('click', '.delete-item', deleteItemHandler);
    $('#completed-task').on('click', '.delete-item', deleteItemHandler);

    // click listener for dynamic complete button
    $('#itemList').on('click', '.mark-complete', markTaskHandler);

} // end readyNow

// UPDATE task to show completed
function markTaskDone (listId, taskDone){
    $.ajax({
        method: 'PUT',
        url: `/list/${listId}`,
        data: {
            complete: taskDone
        }
    }).then ( response => {
        // console log to show task is marked completed
        console.log('Task is Completed!');
        // refresh DOM to show completed
        getList();
    }).catch( error => {
        // console log any errors
        console.log('Error marking task as complete', error);
        // display alert window for any errors
        alert('There was a problem completing task. Please try again.')
    });
} // end markTaskDone

// handle the completed task click
function markTaskHandler () {
    // console log to show complete button clicked
    console.log('Clicked Complete!');
    // at this target task mark complete
    markTaskDone($(this).data("id"), "true");
} // end markTaskHandler


// function to delete selected item
function deleteItemHandler() {
    // console log to show delete button clicked
    console.log('Clicked Delete');
    // call deleteItem using .this for specific id
    deleteItem($(this).data("id"));
}// end deleteItem

// DELETE specific item by id
function deleteItem(listId) {
    $.ajax({
        method: 'DELETE',
        url: `/list/${listId}`
    }).then( (response) => {
        // console log response
        console.log('Deleted:', response);
        // call getList to render DOM again
        getList();
    }).catch( (error) => {
        // send a pop up message for error
        alert('There was a problem deleting that item', error)
    });
} // end deleteItem

// GET books and render to page
function getList() {
    $.ajax({
        method: 'GET',
        url: '/list'
    }).then( (response) => {
        // console log the response
        console.log('this is from the server:', response);
        renderList(response);
    }).catch( (error) => {
        // console log errors if any show
        console.log('error in GET', error);
    });
} // end getList

// render the list items or tasks to the DOM
function renderList(list) {
    // empty the tasks to complete on DOM
    $('#itemList').empty();
    // empty the completed tasks on DOM
    $('#completed-task').empty();

    // loop through tasks to determine where they go on DOM
    for (let i = 0; i < list.length; i++) {
        // console log to see what we get at .notes
        console.log('Task added to list', list[i].notes);
        // let task be the variable for each list item coming in
        let task = list[i];

        // append a new row on the DOM for each item
        if (task.isDone === false) {
            $('#itemList').append(`
            <tr>
                <td class="task">${task.notes}</td>
                <td>
                    <button class="mark-complete btn-success btn-sm" 
                        data-id="${task.id}">Complete
                    </button>
                </td>
                <td>
                    <button class="delete-item btn-danger btn-sm"
                        data-id="${task.id}">Delete
                    </button>
                </td>
            </tr>
        `);
        // if the task is true render that into the completed section
        } else if (task.isDone === true) {
            $('#completed-task').append(`
            <tr>
                <td class="task">${task.notes}</td>
                <td>
                    <button class="mark-complete btn-sm" 
                        disabled data-id="${task.id}">Completed
                    </button>
                </td>
                <td>
                    <button class="delete-item btn-danger btn-sm" 
                        data-id="${task.id}">Delete
                    </button>
                </td>
            </tr>
            `);
        } else {
            console.log('Error rendering tasks to DOM');
        }
    }
} // end renderList

// POST new data
function postList() {
    // console log to show click listener works
    console.log('Clicked Submit');
    
    // create new variable to gather input
    let listObject = {
        notes: $('#addNote').val()
    };
    $.ajax({
        method: 'POST',
        url: '/list',
        data: listObject
    }).then( (response) => {
        // empty the input field
        $('#addNote').val('');
        // call getList to show new item on the DOM
        getList();
    });
} // end postList
