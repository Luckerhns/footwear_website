import { Size } from "../../database/Relations"
import SizeService from "../services/Size.service"

class SizeController {
    public static async create(req, res, next) {
        const params = req.body

        const size = SizeService.create(Size, params ?? params)

        return res.json(size)
    }
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default SizeController