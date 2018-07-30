import express from 'express'
import Responder from 'src/common/Responder.mjs'
import Login from 'src/business/usecase/Login.mjs'

const router = express.Router()
router.post('/auth/login', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const login = new Login()
    login.execute(req.body, responder)
})

export default router
