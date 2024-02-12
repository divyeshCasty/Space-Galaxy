import { Request, Response, Router } from 'express'
import Container from 'typedi'

import { SpaceController } from './../../controllers/SpaceController'

const router = Router()

const spaceController = Container.get(SpaceController)

router.get('/verify-login', async (req: Request, res: Response) => spaceController.verifyLogin(req, res))

export default router
