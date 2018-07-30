import express from 'express'
import Responder from 'src/common/Responder.mjs'
import ConfirmEmail from 'src/business/usecase/ConfirmEmail.mjs'

const router = express.Router()
router.get('/auth/confirm/:token', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const confirmEmail = new ConfirmEmail()
    confirmEmail.execute(req.params, responder)
})

export default router
