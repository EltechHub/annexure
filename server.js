const express =require( "express");
const axios =require( "axios");
const cors = require("cors");/**/
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded(
    {extended:false}))

// Add Access Control Allow Origin headers
/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS',
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});*/

app.use(cors({
    origin: '*'
}));

app.use('/api/jurnal', require('./routes/JurnalRoutes'))

const PORT= process.env.PORT || 7000;
app.listen(7000, console.log(`Port is listening on port: 7000`));




/*
app.get('/select', (req,res)=>{
    connection.query('Select * from products', (err,result)=>{
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    )
})

app.get('/insert', (req,res)=>{
   connection.query('INSERT INTO new_table (text) VALUES (21)', (err,result)=>{
       if(err){
           console.log(err);
       }
       res.send(result);
       }
       )
})*/

