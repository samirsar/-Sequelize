const { Sequelize, DataTypes } = require('sequelize');
const sequelize =require('../db')

const User = sequelize.define('User', {
    item_category_id:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    category_name:{
        type: DataTypes.STRING
    },
    category_name_hindi:{
        type: DataTypes.STRING
    },
    category_image:{
        type: DataTypes.STRING,
        allowNull:false
    },
    vehicle_id:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    created_at:{
        type: DataTypes.DATE
    },
    updated_at:{
        type: DataTypes.DATE
    },
    created_by:{
        type: DataTypes.STRING
    },
    updated_by:{
        type: DataTypes.STRING
    },
    is_deleted:{
        type: DataTypes.BOOLEAN
    }
}, {
  // Other model options go here
  tableName:'ItemCategory',
  timestamps: false
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
User.sync({force:false})

module.exports=User;