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

// GET USERS 
app.get('/users', function(req, res){
    console.log("Got dem thangs!")
    res.json({
        success: true,
        message: 'got dem thangs!',
        users: mockUserData
    })
})



// APP LISTENING AND TALKING
app.listen(8000, function(){
    console.log("Dat thang on!");
})