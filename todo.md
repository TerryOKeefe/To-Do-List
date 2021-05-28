TODO:

-- The To-Do App Basics --
[ ] - Create a front end experience that allows a user to create a Task
[ ] - When the Task is created, it should be stored inside of a database (SQL)
[ ] - Whenever a Task is created the front end should refresh to show all tasks that need to be completed
[ ] - Each Task should have an option to 'Complete' or 'Delete'
[ ] - When a Task is complete, its visual representation should change on the front end.
    [ ] - IE: The background of the task container could change from gray to green. 
    [ ] - The complete option should be 'checked off'.
        [ ] - Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
[ ] - Whether or not a Task is complete should also be stored in the database.
[ ] - Deleting a Task should remove it both from the front end as well as the Database.

-- Styling --
[ ] - Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
    [ ] - background color of the page
    [ ] - font family and size
    [ ] - text color and/or background color of tasks to show whether or not they have been completed

-- Approach --
    -- Setup --
    - [ ] PROJECT SETUP FILE STRUCTURE
        - [x] Make .gitignore file in root folder
        - [x] Make readme.md file in root folder (optional, but recommended)
            - [x] Make server folder in root folder
                - [x] Make server.js file in server folder
                - [x] Make modules folder
                    - [x] pool.js
                - [x] Make a DATABASE.sql file
                - [x] Make public folder
                    - [x] Add favicon.ico file in public folder
                    - [x] Make index.html in public folder
                        - [x] Link "./styles/style.css"
                        - [x] Source in "./vendors/jquery-3.6.0.js" above
                        - [x] Source in "./scripts/client.js" 
                    - [x] Make scripts folder
                        - [x] Make client.js file here
                            - [x] Make sure to source in jQuery
                    - [x] Make styles folder
                        - [x] Make style.css file here
                    - [x] Make vendors folder
                        - [x] Add jQuery.js file here
                        - [x] Source in bootstrap if you like
                    - [x] Make a routes folder

    -- Database --
    [x] - Create a Database called weekend-to-do-app
        [x] - Create a table 
            CREATE TABLE todoList (
                id SERIAL PRIMARY KEY,
                notes VARCHAR(256),
                isDone BOOLEAN DEFAULT FALSE
            );
        [x] - Include database.sql text file
            [x] - Include all your create table queries
    
    -- HTML --
    
        [ ] - HTML 5 setup
            [x] - To Do List Header
            [x] - Add item h2/h3?
                [x] - Input field for item to do
                [x] - Add/Submit item button
            [x] - Things to do h2/h3 
            [ ] - Table setup?
        [ ] - Client.js
            [x] - jQuery setup
            [ ] - Click Listener for Complete
            [ ] - Click Listener for Delete (dynamic)
            [ ] - GET the data
                [ ] - Append the data to the DOM
                [ ] - Dynamic Delete button
                [ ] - Dynamic Complete button
            [ ] - Post the data
                [ ] - Send the values to the server
            [ ] - DELETE the data when clicked
                [ ] - Delete the data when clicked from DOM and Database
            [ ] - PUT or update the data to complete
                [ ] - Update the data to show completed when 'Complete' is clicked
        [x] - Server.js
            [x] - Setup express
            [x] - Setup bodyParser
            [x] - Create todo_router.js
            [x] - Setup and listen on PORT 5000
        [ ] - todo_router.js
            [ ] - Setup express and router
            [ ] - Setup pg and pool
            [ ] - module.exports = router; 
            [ ] - GET
            [ ] - POST
            [ ] - DELETE
            [ ] - PUT

                




-- Things For Later --
    [ ] - Update README.md
    [ ] - Display completed items below a new display of Tasks Completed
    [ ] - Stretch Goals