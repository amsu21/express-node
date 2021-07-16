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
    randomString()
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

// GET USERS BY ID
app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({ success: true, message: 'got a user!', user: req.params.id})
})

// ADD NEW USERS
app.get('/newusers', function(req, res){
    randomString();
    console.log("New users locked in!");
    res.json({
        success: true,
        message: 'new users locked in!',
        users: newUserData
    })
})




// RANDOM STRING FUNCTION
function randomString(length) {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * charactersLength);
    }
    console.log(result);
    return result;
}


// APP LISTENING AND TALKING
app.listen(8000, function(){
    console.log("Dat thang on!");
})