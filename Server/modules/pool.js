const pg = require('pg');

// pg configuration LOCAL ONLY
const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432
});

pool.on('connect', () => {
    // console log in terminal 
    console.log('connected to postgres');
});

pool.on('error', (error) => {
    // console log in terminal if error
    console.log('error connecting to postgres', error);
});

module.exports = pool;
