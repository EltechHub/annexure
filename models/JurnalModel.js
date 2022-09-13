const {Sequelize} =require("sequelize");
//const db =require("../config/database");
const connection=require('../config/database');


const sequelize = new Sequelize('shirinmeva', 'admin', '0000', {
    host: 'localhost',
    dialect: 'mysql'
});

const Jurnal = sequelize.define('product', {
    title: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.DOUBLE
    },
    createdAt:{
        type:Sequelize.DATE,
    },
    updatedAt:{
        type:Sequelize.DATE
    }
}, {
    timestamps: false
});

Jurnal.findAll().then(jurnals => {
    console.log("All jurnals:", JSON.stringify(jurnals, null, 4));
});

module.exports=Jurnal;
/*const Jurnal = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Jurnals = sequelize.define('new_table', {
        id: {type: STRING, primaryKey: true, autoIncrement: true},
        text: {type: STRING, require: true},
        name: {type: STRING, require: true},

    })
    return Jurnals;
}

module.exports = Jurnal*/

//module.exports=model('Jurnal', Jurnal);

/*const {Schema, model}= require('mysql');

const JurnalModel=new Schema({
    text:{
        type: String,
        require: true,
        minLength:3
    },
    name:{
        type:String,
        require: true,
    }
})

const {DataTypes} =Sequelize;
const Jurnal=db.define('new_table',{

    text:DataTypes.STRING,
    name:DataTypes.STRING
},
    {
        freezeTableName:true
    })

module.exports= Jurnal;

(async ()=>{
await db.sync()
})();*/

//module.exports=model('Jurnal', JurnalModel);