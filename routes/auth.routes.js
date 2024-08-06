const router = require('express').Router()
const auth = require('../controllers/auth.controller')

// POST: api/auth
router.post('/', Authorize('Usuario,Administrador'), auth.login)

// GET: api/auth/tiempo
router.get('/tiempo', Authorize('Usuario,Administrador'), auth.tiempo)

module.exports = router