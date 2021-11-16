const Sequelize=require('sequelize');
 // to connect to the mysql databse database 
const sequelize = new Sequelize('user-details','root','Ladeed@123',{
    host:'localhost',
    dialect:'mysql'
})
 module.exports=sequelize;