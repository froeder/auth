import express from 'express'
import Responder from 'src/common/Responder.mjs'
import UpdatePassword from 'src/business/usecase/UpdatePassword.mjs'

const router = express.Router()
router.put('/auth/password', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const updatePassword = new UpdatePassword()
    updatePassword.execute(req.body, responder)
})

export default router
