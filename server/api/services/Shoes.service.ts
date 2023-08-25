import { Model } from "sequelize";

class ShoesService {
    public static async create(model, dto: Object)   {
        const shoes = await model.create(dto ?? {...dto})

        return shoes
    }
    public static async getOne(model, dto) {}
    public static async getAll(model, dto) {
        const shoes = await model.findAndCountAll({where: dto ? dto : {}, limit: 40})
        return shoes
    }
    public static async deleteOne(model, properties) {
        const shoes = await model.destroy({where : properties ? properties : {}})
        return shoes
    }
}

export default ShoesService;
