import { Shoes, Type } from "../../database/Relations";
import Brand from "../../database/models/Brand";
import ErrorHandler from "../exceptions/ErrorException";
import { ModelException } from "../exceptions/ModelException";
import BrandService from "../services/Brand.service";
import ModelService from "../services/Model.service";
import SeasonService from "../services/Season.service";
import ShoesService from "../services/Shoes.service";
import SizeService from "../services/Size.service";
import TypeService from "../services/Type.service";

class ShoesController {
    public static async createNew(req, res, next) {
        try {
            const {shoes, type, price, brand, model = null} = req.body 

            const _type = await TypeService.getOne({type: type})

            const _brand = await BrandService.getOne({brand: brand})
            
            const _model = await ModelService.create({model: model})
            
            // const _season = await SeasonService.getOne({season: season}).catch(e => res.json(e))
            
            // const _size = await SizeService.getOne({size: size}).catch(e => res.json(e))
            
            // await shoes.addType(_type)
            // await shoes.addBrand(_brand)
            
            // const footwear = await ShoesService.getOne({shoes: _shoes}, [Brand, Type])
            
            await ShoesService.create({shoes: shoes, price: price, typeId: _type.dataValues.id, brandId: _brand.dataValues.id})
            
            const newShoes = await ShoesService.getOne({shoes: shoes}, [Type, Brand]).catch(e => next(e))

            return res.json({newShoes, _model})
        } catch (error) {
            next(error)
        }
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {
        const params = req.body
        const shoes = await ShoesService.getAll({...params})
    }
    public static async deleteOne(req, res, next) {}
}

export default ShoesController;
