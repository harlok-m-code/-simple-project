const uuid = require('uuid')
const path = require('path')
const {Image} = require('../model')
class imageController {
    async create(req,res) {
        try {
        const {tag, desc} = req.body
        const {img} = req.files
        let files = uuid.v4() + '.jpg'
        
        img.mv(path.resolve(__dirname,'..','static',files))
        
        const items = await Image.create({tag,desc,img:files})
        
        return res.json(items)
        } catch (error) {
            console.log(error)
        }
        // return res.json(items)
    }
    async getAll(req, res) {
        const items = await Image.findAll()

        return res.json(items)
    }

    async edit(req, res) {
        try {
        const {id} = req.params
        const {tag, desc, img} = req.body
        const items = await Image.update( {desc:desc, tag:tag },{
            where: {
                id:id
            }
        })
        return res.json(items)
        } catch (error) {
            console.log(error)
        }
        
    }

    async delete(req, res) {
        try {
        const {id} = req.params
        const items = await Image.destroy({
            where:{
                id:id
            }
        })
        return res.json({message:"Deleted"})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new imageController()