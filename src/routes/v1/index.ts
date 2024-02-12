import { Router } from 'express'

import auth from './auth'
import space from './space'

const router = Router()

router.use('/auth', auth)
router.use('/space', space)

export default router
