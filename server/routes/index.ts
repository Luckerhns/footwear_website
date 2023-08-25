import Router from 'express'
import ModelRouter from './ModelRouter'
import TypeBrandRouter from './TypeBrandRouter'
import UserRouter from './UserRouter'
import TypeRouter from './TypeRouter'
import ActivateController from '../api/controllers/Activate.controller'
import BrandController from '../api/controllers/Brand.controller'
import TypeController from '../api/controllers/Type.controller'
import BrandRouter from './BrandRouter'

const router = Router()

router.use('/model', ModelRouter)
router.use('/users', UserRouter)
router.use('/type', TypeRouter)
router.use('/brand', BrandRouter)

router.use('/type_brand', TypeBrandRouter)

router.get('/activate/:link', ActivateController.activate)

export {
    router
}