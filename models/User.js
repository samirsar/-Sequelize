const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db')

const User = sequelize.define('User', {
   id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
   },
   FirstName:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'first_name'
   },
   LastName:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'last_name'
   },
   UserName:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
   },
   Password:{
    type:DataTypes.STRING,
    allowNull:false
   },
   Email:{
    type:DataTypes.STRING,
    allowNull:false
   },
   CreatedAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:new Date(),
    field:'created_at'
   },
   UpdatedAt:{
    type:DataTypes.DATE,
    allowNull:false,
    defaultValue:new Date(),
    field:'updated_at'
   }
}, {
  // Other model options go here
  tableName:'users',
  timestamps: false
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User,"User model"); // true
User.sync({force:false})

module.exports=User;