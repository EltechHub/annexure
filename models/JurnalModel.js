const {Sequelize, DataTypes} =require("sequelize");
const db =require("../config/database");

const Jurnal = db.define('product', {
    title: {
        type: Sequelize.STRING,
    },
    text: {
        type: Sequelize.STRING
    },
    file:{
        type:Sequelize.STRING
    },
    pin:{
        type:DataTypes.BOOLEAN
    }

}, {
    timestamps: false
});

module.exports=Jurnal;

