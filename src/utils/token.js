const jwt = require("jsonwebtoken")
// genero el token
const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_JWT, { expiresIn: '1h' })
}
// verifico el token para las rutas privadas
const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, "secreteKey")

}
module.exports = { generateToken, verifyToken};