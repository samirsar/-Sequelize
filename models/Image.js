const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db')

const Image = sequelize.define('images', {
   ItemCategoryId:{
      type:DataTypes.INTEGER,
      allowNull:false,
    
   },
   ImageName:{
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
  timestamps: false
});

// `sequelize.define` also returns the model
console.log(Image === sequelize.models.images,"Images"); // true
Image.sync({force:false})

module.exports=Image;