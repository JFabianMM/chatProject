const express = require('express');
const router = express.Router();

// const Task = require('../models/task');
const User = require('../models/user');

router.get('/', async (req, res) => {
    // const tasks = await Task.find();
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req, res)=>{
    // const { title, description} = req.body;
    // const task = new Task({title, description});
    // await task.save();
    // res.json({status: 'Task Saved'});
    const { email, password, firstName, lastName} = req.body;
    const user = new User({email, password, firstName, lastName});
    await user.save();
    res.json({status: 'User Saved'});
});

router.put('/:id', async(req,res)=>{
    // const { title, description} =req.body;
    // const newTask = {title, description};
    // await Task.findByIdAndUpdate(req.params.id, newTask);
    // res.json({status:'Task Updated'});
    const { email, password, firstName, lastName} =req.body;
    const newUser = {email, password, firstName, lastName};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status:'User Updated'});
});

router.delete('/:id', async(req,res)=>{
    // await Task.findByIdAndRemove(req.params.id);
    // res.json({status: 'Task Deleted'});
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
});

router.get('/:id', async (req, res)=>{
    // const task= await Task.findById(req.params.id);
    // res.json(task);
    const user= await User.findById(req.params.id);
    res.json(user);
});

module.exports=router;