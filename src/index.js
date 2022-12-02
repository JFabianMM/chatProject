const express = require('express')
const morgan = require('morgan');
const { dirname } = require('path');
const path = require('path');
const { nextTick } = require('process');

// const userRouter = require('./routes/user.routes');
// const taskRouter = require('./routes/task.routes');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

app.use((req, res, next)=>{
    console.log('yy');
    console.log(req.method, req.path);
    console.log('kk');
    next();
})

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);


// Routes
//app.use('/api/tasks', require('./routes/task.routes'));
app.use('/api/users', require('./routes/user.routes'));

// Static files
console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));


// Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisisthechatproject', { expiresIn: '1 day'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisisthechatproject');
//     console.log(data);

// }

// myFunction();