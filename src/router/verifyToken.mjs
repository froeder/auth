import express from 'express'
import Responder from 'src/common/Responder.mjs'
import VerifyToken from 'src/business/usecase/VerifyToken.mjs'

const router = express.Router()
router.get('/auth/verify/:token', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const verifyToken = new VerifyToken()
    verifyToken.execute(req.params, responder)
})

export default router
