import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: 'Santana1',
    port: 5432,
    database: 'OrderManager'
});
