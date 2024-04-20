const express=require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app=express();
const port=5000;

app.use(express.json());
app.use(cors());

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin1010',
  password: 'kowtsi1010',
  database: 'kowtsi2_db'
})

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to the database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

//CREATE USER
app.post('/register', async (req, res) => {

  const { email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const query = `INSERT INTO user (email, password) VALUES (?, ?)`;
    connection.query(query, [email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Failed to register user.' });
  }
});


