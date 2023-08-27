import { Model } from "../../database/Relations";
import Season from "../../database/models/Season";
import ModelService from "../services/Model.service";
import SeasonService from "../services/Season.service";

class ModelController {
    public static async create(req, res, next) {
        try {
            const params = req.body;
            
            const _season = await SeasonService.getOne({season: params.season})
            await ModelService.create({...params, seasonId: _season.dataValues.id});
            
            const newModel = await ModelService.getOne({model: params.model, seasonId: _season.dataValues.id}, [Season])

            return res.json(newModel);
        } catch (error) {
            next(error);
        }
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default ModelController;
