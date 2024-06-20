const express = require('express');
const router = express.Router();
const pg = require('pg');

let todos = [];


const connection = new pg.Pool({
  host: 'localhost',
  user: 'root',
  password: 'postgres',
  database: 'todo_app',
  port: 5432,
  });


  console.log(results.rows)
  {
  res.render('index', {
    title: 'ToDo App',
    todos: results.rows;
  });
};

router.post('/', function (req, res, next) {
  connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return
    }
    console.log('success');
  });
  const todo = req.body.add;
  res.redirect('/');
});

module.exports = router;