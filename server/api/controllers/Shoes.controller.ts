import { Shoes } from "../../database/Relations";
import ErrorHandler from "../exceptions/ErrorException";
import ShoesService from "../services/Shoes.service";

class ShoesController {
    public static async create(req, res, next) {
        try {
            const params = req.body
            const shoes = await ShoesService.create(Shoes, params ?? params)
            
            return res.json(shoes)
        } catch (error) {
            throw ErrorHandler.BadRequest('Shoes create error', error)
        }
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {
        const body = req.body
        const shoes = await ShoesService.getAll(Shoes, body ?? body)
    }
    public static async deleteOne(req, res, next) {}
}

export default ShoesController;
