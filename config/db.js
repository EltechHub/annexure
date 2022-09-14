const mysql=require('mysql');

const connectDB=async ()=>{
    try{
const connection =mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '0000',
    database: 'shirinmeva',
})
        console.log(`Mysql is connected`)
    }
    catch (err){
        console.log(err);
    }
}
module.exports=connectDB();


