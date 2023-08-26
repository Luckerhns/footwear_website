import { Model } from "../../database/Relations"

class ModelService {
    public static async create(dto) {
        const model = Model.create({...dto})

        return model
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default ModelService