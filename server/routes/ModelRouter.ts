import Router from 'express'
import ModelController from '../api/controllers/Model.controller'
const router = Router()

router.post('/create', ModelController.create)
router.get('/getOne', ModelController.getOne)
router.get('/getAll', ModelController.getAll)

export default router