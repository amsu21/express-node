// EXPRESS LIBRARY
const express = require('express');

// EXPRESS CONSTRUCTOR
const app = express();


// RETURN MOCK JSON DATA
let mockUserData =[
    {name: 'Amsu'},
    {name: 'Sulayman'},
    {name: 'Baasir'},
    {name: 'Warner'},
]

// NEW USERS MOCK JSON DATA
let newUserData =[
]

// GET USERS 
app.get('/users', function(req, res){
    console.log("Got dem thangs! Users locked in!");
    res.json({
        success: true,
        message: 'got dem thangs!',
        users: mockUserData
    })
})

// ADD NEW USERS
app.get('/newusers', function(req, res){
    console.log("New users locked in!");
})




// RANDOM STRING FUNCTION

// APP LISTENING AND TALKING
app.listen(8000, function(){
    console.log("Dat thang on!");
})