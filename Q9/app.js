const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee',
};

async function connectDatabase() {
  try {
    
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database.');

    const insertQuery = "INSERT INTO employee (name, age, department) VALUES ('Ronak',20,'IT')";
    connection.query(insertQuery, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    

  } catch (error) {
    console.error('Error:', error.message);
  }
}

connectDatabase();
