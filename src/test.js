const express = require('express');
const app = express.app();

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});
