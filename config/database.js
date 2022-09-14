const {Sequelize} =require("sequelize");

const db=new Sequelize('shirinmeva', 'root', '',{
    host:'localhost',
    dialect:'mysql'
});

module.exports =db;
