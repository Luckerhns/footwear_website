import { Model } from "../../database/Relations"
import SeasonService from "./Season.service"

class ModelService {
    public static async create(dto) {
        const model = await Model.create({...dto})

        return model
    }
    public static async getOne(dto, included?) {
        const model = await Model.findOne({where: {...dto}, include: included})

        return model
    }
    public static async getAll(dto, included?) {
        const model = await Model.findAndCountAll({where: {...dto}, include: included})

        return model
    }
    public static async deleteOne(dto, included?) {}
}

export default ModelService