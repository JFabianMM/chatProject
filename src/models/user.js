const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    email: { 
        type: String,
        unique: true, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        } 
    },
    password: { 
        type: String, 
        required: true,
        minlength: 2,
        trim: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    firstName: { 
        type: String, 
        required: true,
        trim: true
    },
    lastName: { 
        type: String, 
        required: true,
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// userSchema.methods.generateAuthToken = async function (){
//     console.log('aquiii')
//     const user = this;
//     const token =jwt.sign({_id: user._id.toString() }, 'thisisthechatproject');

//     user.tokens = user.tokens.concat({ token });
//     await user.save(); 
//     return token;
// } 

// AnimalSchema.methods.findSimilarType = function findSimilarType (cb) {
//     return this.model('Animal').find({ type: this.type }, cb);
//   };
// AnimalSchema.statics.search = function search (name, cb) {
//     return this.where('name', new RegExp(name, 'i')).exec(cb);
//   }
  
//   Animal.search('Rover', function (err) {
//     if (err) ...
//   })
        
// userSchema.statics.findByCredentials = async (email, password) => {
//     console.log('uno11');
//     const user = await User.findOne({ email });
//     console.log('uno22');
//     if (!user){
//         console.log('dos22');
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch){
//         console.log('tres');
//         throw new Error('Unable to login')
//     }

//     console.log('cuatro');
//     return user
// };

// Hash the plain password before saving
userSchema.pre('save', async function(next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    console.log('Just before saving');
    next();
})

module.exports = mongoose.model('User', userSchema);
