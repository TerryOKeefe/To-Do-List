TODO:

-- The To-Do App Basics --
[x] - Create a front end experience that allows a user to create a Task
[x] - When the Task is created, it should be stored inside of a database (SQL)
[x] - Whenever a Task is created the front end should refresh to show all tasks that need to be completed
[x] - Each Task should have an option to 'Complete' or 'Delete'
[x] - When a Task is complete, its visual representation should change on the front end.
    [x] - IE: The background of the task container could change from gray to green. 
    [x] - The complete option should be 'checked off'.
        [x] - Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
[x] - Whether or not a Task is complete should also be stored in the database.
[x] - Deleting a Task should remove it both from the front end as well as the Database.

-- Styling --
[x] - Use CSS styling to move the aesthetic of the page beyond the vanilla HTML look:
    [x] - background color of the page
    [x] - font family and size
    [x] - text color and/or background color of tasks to show whether or not they have been completed

-- Approach --
    -- Setup --
    - [x] PROJECT SETUP FILE STRUCTURE
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
        [x] - HTML 5 setup
            [x] - To Do List Header
            [x] - Add item h2/h3? -- maybe h4 looks better
                [x] - Input field for item to do
                [x] - Add/Submit item button
            [x] - Tasks to complete h2/h3 -- maybe h4 to keep uniform
            [x] - Table setup?
        [x] - Client.js
            [x] - jQuery setup
            [x] - Click Listener for Complete
            [x] - Click Listener for Delete (dynamic)
            [x] - GET the data
                [x] - Append the data to the DOM
                [x] - Dynamic Delete button
                [x] - Dynamic Complete button
            [x] - Post the data
                [x] - Send the values to the server
            [x] - DELETE the data when clicked
                [x] - Delete the data when clicked from DOM and Database
            [x] - PUT or update the data to complete
                [x] - Update the data to show completed when 'Complete' is clicked
        [x] - Server.js
            [x] - Setup express
            [x] - Setup bodyParser
            [x] - Create todo_router.js
            [x] - Setup and listen on PORT 5000
        [x] - todo_router.js
            [x] - Setup express and router
            [x] - Setup pg and pool
                [x] - module.exports = router; 
            [x] - GET
            [x] - POST
            [x] - DELETE
            [x] - PUT

                




-- Things For Later --
    [ ] - Update README.md
    [ ] - Display completed items below a new display of Tasks Completed
    [ ] - Stretch Goals