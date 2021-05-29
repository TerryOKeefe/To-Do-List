console.log('JS Loaded!');

$(document).ready(readyNow);

function readyNow() {
    // console log to show jQuery loaded
    console.log('jQuery Loaded!');
    getList();
    
    // Click Listener for submit button
    $('#submitBtn').on('click', postList);

    // Click listener for dynamic delete button
    $('#itemList').on('click', '.delete-item', deleteItemHandler)

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

// Delete specific item by id
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
}

// function to get books and render to page
function getList() {
    $('#itemList').empty();
    $.ajax({
        method: 'GET',
        url: '/list'
    }).then( (response) => {
        // console log the response
        console.log('this is from the server:', response);
        for (let i = 0; i < response.length; i++) {
            // console log to see what we get at .notes
            console.log(response[i].notes);

            // append a new row on the DOM for each item
            $('#itemList').append(`
                <tr>
                    <td>${response[i].notes}</td>
                    <td>
                        <button class="mark-complete" data-id="${response[i].id}">Mark Completed</button>
                    </td>
                    <td>
                        <button class="delete-item" data-id="${response[i].id}">Delete</button>
                    </td>
                </tr>
            `);
        }
    }).catch( (error) => {
        // console log errors if any show
        console.log('error in GET', error);
    });
} // end getList

// function to POST new data
function postList() {
    // console log to show click listener works
    console.log('Clicked Submit');
    
    // create new variable to gather input
    let listObject = {
        notes: $('#addNote').val()
    }
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
