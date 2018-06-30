import express from 'express'
import Responder from '../common/'
import ConfirmEmail from '../business/usecase/ConfirmEmail.mjs'

const router = express.Router()
router.get('/auth/confirm/:email/:password', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const confirmEmail = new ConfirmEmail()
    confirmEmail.execute(req.params, responder)
})

export default router