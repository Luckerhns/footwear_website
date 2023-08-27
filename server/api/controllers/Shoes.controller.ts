import { Model, Shoes, Size, Type } from "../../database/Relations";
import Brand from "../../database/models/Brand";
import ErrorHandler from "../exceptions/ErrorException";
import { ModelException } from "../exceptions/ModelException";
import BrandService from "../services/Brand.service";
import ModelService from "../services/Model.service";
import SeasonService from "../services/Season.service";
import ShoesService from "../services/Shoes.service";
import SizeService from "../services/Size.service";
import TypeService from "../services/Type.service";
import { IShoesParams } from "../../types/params";
import Season from "../../database/models/Season";

class ShoesController {
    public static async createNew(req, res, next) {
        try {
            const {shoes = null, type = null, price = null, brand = null, model = null, season = null, size = null}: IShoesParams = req.body 

            const _type = await TypeService.getOne({type: type})
                
            const _brand = await BrandService.getOne({brand: brand})
    
            const _season = await SeasonService.getOne({season: season})
                
            const _model = await ModelService.getOne({model: model})

            const _size = await SizeService.create({size: size})

            const models = [_type, _brand, _season, _size, _model]

            for(let i = 0; i < models.length; i++) {
                if(!models[i]) {
                    throw new ModelException(404, `Model #${i} is undefined`)
                }
            }
        
            await ShoesService.create({shoes: shoes, price: price, typeId: _type.dataValues.id, brandId: _brand.dataValues.id, seasonId: _season.dataValues.id, sizeId: _size.dataValues.id, modelId: 1 })
            
            const newShoes = await ShoesService.getOne({shoes: shoes}, [Type, Brand, Season, Size, Model]).catch(e => next(e))

            return res.json(newShoes)
        } catch (error) {
            next(error)
        }
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {
        const params = req.body
        const shoes = await ShoesService.getAll({...params})

        return shoes
    }
    public static async deleteOne(req, res, next) {}
}

export default ShoesController;
