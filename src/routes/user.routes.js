const express = require('express');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const User = require('../models/user');
const auth = require('../middleware/auth');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const generateAuthToken = async function (user){
    const token =jwt.sign({_id: user._id.toString() }, 'thisisthechatproject');
    user.tokens = user.tokens.concat({ token });
    await user.save(); 
    return token;
} 

const findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });
    if (!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        throw new Error('Unable to login')
    }
    return user
};

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/users', auth, async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router.post('/', async (req, res)=>{
    let { email, password, firstName, lastName} = req.body;
    const user = new User({email, password, firstName, lastName});
    try {
        await user.save();
        const token = await generateAuthToken(user);
        res.status(201).send({user, token});
    } catch (e){
        res.status(400).send();
    }  
});

router.post('/login', async (req, res)=>{
    try {
        const user = await findByCredentials(req.body.email, req.body.password);
        //const user = await user.findByCredentials(req.body.email, req.body.password);
        const token = await generateAuthToken(user);
        res.send({user, token});
    } catch (e){
        res.status(400).send(e)
    }
});

router.post('/logout', auth, async (req, res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.user.save();

        res.send();
    } catch (e){
        res.status(500).send()
    }
});

// router.post('/logoutAll', auth, async (req, res)=>{
//     // try {
//     //     req.user.tokens = [];
//     //     await req.user.save();
//     //     res.send();
//     // } catch (e){
//     //     res.status(500).send()
//     // }
// });

// router.put('/:id', async(req,res)=>{
//     // const { title, description} =req.body;
//     // const newTask = {title, description};
//     // await Task.findByIdAndUpdate(req.params.id, newTask);
//     // res.json({status:'Task Updated'});

//     const { email, password, firstName, lastName} =req.body;
//     const newUser = {email, password, firstName, lastName};
//     await User.findByIdAndUpdate(req.params.id, newUser);
//     res.json({status:'User Updated'});
// });

router.delete('/users/me', auth, async(req,res)=>{
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e){
        res.status(500).send()
    }
});

router.patch('/users/me', auth, async(req,res)=>{
    // let { email, password, firstName, lastName} = req.body;
    // console.log(email, password, firstName, lastName);
    //console.log('patch aqui');
    const updates = Object.keys(req.body);
    console.log(updates);
    // console.log(req);
     const allowedUpdates = ['email', 'password', 'firstName', 'lastName'];
     const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    
     if (!isValidOperation){
         return res.status(400).send({ error: 'Invalid updates!' })
     }

    try {
        updates.forEach((update)=> req.user[update]= req.body[update])
        await req.user.save();
        res.send(req.user);
    } catch (e){
        res.status(400).send(e);
    } 
});

// router.get('/:id', async (req, res)=>{
//     // const task= await Task.findById(req.params.id);
//     // res.json(task);
//     const user= await User.findById(req.params.id);
//     res.json(user);
// });




module.exports=router;