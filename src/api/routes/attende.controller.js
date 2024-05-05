const express = require('express');
const router = express.Router();
const { selectAttende, register , login , modifyAttende , dashboard } = require('../controllers/attende.controller');
const { isAuth, isAuthAdmin  } = require('../../middleware/auth')

router.post('/register', register);
router.post("/login", login);
router.get('/misconciertos',[isAuth],selectAttende);
router.put('/update', [isAuth], modifyAttende )
router.get('/admin/dashboard',[isAuthAdmin], dashboard)

module.exports = router;
