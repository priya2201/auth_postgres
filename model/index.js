const {Sequelize,DataTypes}=require('sequelize');
const sequelize=new Sequelize(`postgres://postgres:MyStrongPassword1234$@localhost:5432/testing`)
sequelize.authenticate().then(()=>{
    console.log(`Database Connected to Discover`)
}).catch((err)=>{
    console.log(err)
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//connecting to model
db.users = require('./userModel.js') (sequelize, DataTypes)

//exporting the module
module.exports = db