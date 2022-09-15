const {Sequelize} =require("sequelize");
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
    order_number:{
        type:Sequelize.STRING
    }

}, {
    timestamps: false
});

module.exports=Jurnal;

