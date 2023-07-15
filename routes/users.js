var express = require('express');
var router = express.Router();
var User = require('../entities/user');
var userService = require('../services/user_service');
var JsonParserService = require('../services/json_parse_service');

// GET all users
router.get('/', async function(req, res, next) {
  try {
    const users = await userService.all();
    res.send(JsonParserService.parseObjectList(users));
  } catch (err) {
    next(err);
  }
});

// GET user by ID
router.get('/:id', async function(req, res, next) {
  try {
    const user = await userService.find_by_id(req.params.id);
    res.send(JsonParserService.parseObject(user));
  } catch (err) {
    next(err);
  }
});

// POST create a user
router.post('/', async function(req, res, next) {
  const user = new User(req.body);
  try {
    await userService.create(user);
    res.send({ success: true, message: 'User created successfully.' });
  } catch (err) {
    next(err);
  }
});

// PUT update a user
router.put('/:id', async function(req, res, next) {
  const user = new User(req.body);
  user.id = req.params.id
  
  try {
    await userService.update(user);
    res.send({ success: true, message: 'User updated successfully.' });
  } catch (err) {
    next(err);
  }
});

// DELETE a user
router.delete('/:id', async function(req, res, next) {
  try {
    await userService.delete_by_id(req.params.id);
    res.send({ success: true, message: 'User deleted successfully.' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
