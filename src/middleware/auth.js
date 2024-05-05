const { verifyToken } = require('../utils/token');
const Attende = require('../api/models/attende.model');
//autentificación, eres usuario?
const isAuth = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(400).json({ message: "No hay token" })
        }
        const token = auth.split(" ")[1];
        const tokenVerified = verifyToken(token)
        console.log(tokenVerified)
        if (!tokenVerified._id) {
            return res.status(400).json({ message: "Token  incorrecto" })
        }
        const AttendeProfile = await Attende.findById(tokenVerified._id)

        req.AttendeProfile = AttendeProfile;
        next()
    } catch (error) {
        console.log(error)
    }
}

//verifico si es administrador 
const isAuthAdmin = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(400).json({ message: "No hay token" });
        }
        const token = auth.split(" ")[1];
        const tokenVerified = verifyToken(token); 

        if (!tokenVerified._id || tokenVerified.role !== 'admin') {
            return res.status(401).json({ message: "Acceso no autorizado" });
        }

        const AdminProfile = await Admin.findById(tokenVerified._id); 
        if (!AdminProfile) {
            return res.status(404).json({ message: "Perfil de administrador no encontrado" });
        }

        req.AdminProfile = AdminProfile;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

module.exports = { isAuth, isAuthAdmin }

