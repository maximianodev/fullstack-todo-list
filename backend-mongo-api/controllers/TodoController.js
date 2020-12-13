const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const Todo = require('../models/Todo');

// CREATES A NEW TODO
router.post('/', function (req, res) {
  Todo.create(
    {
      name: req.body.name,
      field: req.body.field,
    },
    function (err, todo) {
      if (err)
        return res
          .status(500)
          .send('There was a problem adding the information to the database.');
      res.status(200).send(todo);
    }
  );
});

// RETURNS ALL TODO's IN THE DATABASE
router.get('/', function (req, res) {
  Todo.find({}, function (err, todo) {
    if (err)
      return res.status(500).send('There was a problem finding the todos.');
    res.status(200).send(todo);
  });
});

// GETS A SINGLE TODO FROM THE DATABASE
router.get('/:id', function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (err)
      return res.status(500).send('There was a problem finding the todo.');
    if (!todo) return res.status(404).send('No todo found.');
    res.status(200).send(todo);
  });
});

// DELETES A TODO FROM THE DATABASE
router.delete('/:id', function (req, res) {
  Todo.findOneAndDelete(req.params.id, function (err, todo) {
    if (err)
      return res.status(500).send('There was a problem deleting the todo.');
    res.status(200).send(todo);
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
  Todo.findOneAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, todo) {
      if (err)
        return res.status(500).send('There was a problem updating the todo.');
      res.status(200).send(todo);
    }
  );
});

module.exports = router;
