const mysql=require('mysql');

const connectDB=async ()=>{
    try{
const connection =mysql.createConnection({
    user: 'admin',
    host: 'localhost',
    password: '0000',
    database: 'shirinmeva',
})
        console.log(`Mysql is connected to:`)
    }
    catch (err){
        console.log(err);
    }
}
module.exports=connectDB();




/*connection.connect((err)=>{
    if(err){
        console.log("Error on connection");
        return;
    }
    console.log('Connected!');
});*/



