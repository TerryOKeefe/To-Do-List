console.log('JS Loaded!');

$(document).ready(readyNow);

function readyNow() {
    // console log to show jQuery loaded
    console.log('jQuery Loaded!');
    getList();
    
    // Click Listener
    $('#submitBtn').on('click', postList);
} // end readyNow

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
