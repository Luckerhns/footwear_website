class SizeService {
    public static async create(model, dto) {
        const size = model.create(dto ?? {...dto})

        return size
    }
    public static async getOne(req, res, next) {}
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default SizeService