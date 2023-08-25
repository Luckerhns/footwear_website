class ModelService {
    public static async create(model, dto) {
        const Model = model.create(dto ?? {...dto}, )

        return Model
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default ModelService