//we have two methods of importing files : 
// i) common js : here code comes synchronously  
// const express = require('express');
// ii) module js : here it is asynchronous
// to include this we have to undergo one more step : go to package.json -> first bracket -> "type" : "module" 
//now by this step all the files will be assembled as modules 
import express from "express";
const app = express();

// app.get('/',(req,res)=>{
//     res.send("server is ready");
// })

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id : 1,
            title : 'first joke',
            content : 'this is first joke'
        },
        {
            id : 2,
            title : 'second joke',
            content : 'this is second joke'
        },
        {
            id : 3,
            title : 'third joke',
            content : 'this is third joke'
        },
        {
            id : 4,
            title : 'fourth joke',
            content : 'this is fourth joke'
        },
        {
            id : 5,
            title : 'fifth joke',
            content : 'this is fifth joke'
        }
    ];
    res.send(jokes);
})


const port = process.env.PORT || 3000; //we can do this but always make .env variable in production

app.listen(port, ()=>{
    console.log(`Serve at http://localhost:${port}`);
})