const mysql=require('mysql');

const connectDB=async ()=>{
    try{
const db =mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'shirinmeva',
})
        console.log(`Mysql is connected`)
    }
    catch (err){
        console.log(err);
    }
}
module.exports=connectDB();


