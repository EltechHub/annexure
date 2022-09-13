const express =require( "express");
//const connectDB=require('./config/db')
const mysql = require("mysql");

require('dotenv').config();

//connect to Database
const connection =mysql.createConnection({
    user: 'admin',
    host: 'localhost',
    password: '0000',
    database: 'shirinmeva',
});
const app = express();


app.use(express.json());
app.use(express.urlencoded(
    {extended:false}))

app.use('/api/jurnal', require('./routes/JurnalRoutes'))

//const PORT= process.env.PORT || 5000;
app.listen(8000, console.log(`Port is listening on port`));





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
})

