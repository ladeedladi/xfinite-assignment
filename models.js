const Sequelize=require('sequelize')
const sequelize=require('./utils/Database')

//model to access the database
//it is the structure of database
//here the tablename and coulums  are specified lik types ,primarykey,unique
const Users=sequelize.define('XfiniteAssignment',{
  id:{
    type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
  },
    name:{
        type:Sequelize.STRING,
        primaryKey:true,
       
        
        
    },
   
    

})
module.exports=Users;