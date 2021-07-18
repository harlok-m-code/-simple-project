const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const Image = sequelize.define( 'image', {
    id:{type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    tag:{type:DataTypes.STRING},
    desc:{type:DataTypes.STRING},
    img:{type:DataTypes.STRING, allowNull:false }
})

module.exports = {
    Image
}