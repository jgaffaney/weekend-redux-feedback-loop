const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'prime_feedback',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis:30000
})

pool.on('connect', () => {
    console.log('Connected to DB')
})

pool.on('error', () => {
    console.log('Error connecting to DB');
    
})

module.exports = pool;
