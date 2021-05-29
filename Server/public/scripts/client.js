console.log('JS Loaded!');

$(document).ready(readyNow);

function readyNow() {
    // console log to show jQuery loaded
    console.log('jQuery Loaded!');
    getList();
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
                </tr>
            `);
        }
    }).catch( (error) => {
        // console log errors if any show
        console.log('error in GET', error);
    });
} // end getList
