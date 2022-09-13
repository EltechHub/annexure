const {Sequelize} =require("sequelize");

const db=new Sequelize('shirinmeva', 'admin', '0000',{
    host:'localhost',
    dialect:'mysql'
});

module.exports =db;