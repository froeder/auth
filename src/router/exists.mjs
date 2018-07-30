import express from 'express'
import Responder from 'src/common/Responder.mjs'
import CheckIsExist from 'src/business/usecase/CheckIsExist.mjs'

const router = express.Router()
router.get('/auth/exists/:email', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const checkIsExist = new CheckIsExist()
    checkIsExist.execute(req.params, responder)
})

export default router
