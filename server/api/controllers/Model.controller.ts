import { Model } from "../../database/Relations";
import ModelService from "../services/Model.service";

class ModelController {
    public static async create(req, res, next) {
        try {
            const params = req.body;
            const model = await ModelService.create(Model, params);
            
            return res.json(model);
        } catch (error) {
            next(error);
        }
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default ModelController;
