import mysql from 'mysql2/promise'; 
import 'dotenv/config';

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST, // localhost
    port: process.env.MYSQL_PORT, // 3306
    user: process.env.MYSQL_USER, // root
    password: process.env.MYSQL_PASSWORD, // ""
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
});

(async () => {
    try {
        const [rows] = await connection.query('SELECT 1');
        console.log('Conexión exitosa a la base de datos:', rows);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
})();

export default connection;