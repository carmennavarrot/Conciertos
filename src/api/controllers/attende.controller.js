const Attende = require('../models/attende.model');
const bcrypt = require('bcrypt');
const { validateEmail , validatepassword } = require('../../utils/validator');
const { generateToken } = require('../../utils/token');

//registro
const register = async(req, res) =>{
    try {
        const userDocument = new Attende(req.body);
        console.log(req.body);
        const valEmail = await validateEmail(req.body.email);
        console.log(valEmail);
        if(!valEmail){
            const valPassword = validatepassword(req.body.password);
            if(valPassword){
                userDocument.password = bcrypt.hashSync(userDocument.password,10);
                const createdAttende = await userDocument.save();
                return res.status(200).json({success: true, data: createdAttende});
            } else{
                return res.status(200).json({ success: false,
                message: 'LA contraseña no cumple con los requisitos'});
            }
        }
        return res
        .status(200).json({ success: false, message: 'Email registrado'})
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
//login
const login = async (req, res) => {
    try {
      const AttendeBody = req.body;
      const AttendeDB = await validateEmail(AttendeBody.email)
      if (!AttendeDB) {
        return res.status(200).json({ succe: false, message: "Email no registrado" })
      }
      if (!bcrypt.compareSync(AttendeBody.password, AttendeDB.password)) {
        return res.status(200).json({ succes: true, message: "contraseña o email incorrecto" })
      }
      const token = generateToken({
        name: AttendeDB.name,
        email: AttendeDB.email,
        _id: AttendeDB._id,
      })
      return res.status(200).json({ success: true, token: token })
  
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  
//el asistente ve sus conciertos, ruta privada 
const selectAttende = async (req, res) => {
    try{
    const nameAttende = req.query.name;
     const attende = await User.find({ name: nameAttende })
      .populate({ path: 'concert', select: 'name' });
    return res.status(200).json(attende);}
    catch(error){
     console.log(error);
            return res.status(500).json(error);
    }
  }

//el usuario modifica sus datos, ruta privada
const modifyAttende = async (req, res) => {
    console.log(req.userProfile);
    const newAttende = new Attende(req.body);
    newAttende.password = bcrypt.hashSync(req.body.password, 10)
    newAttende._id = req.userProfile._id
    console.log(newAttende)
    const updateAttende = await Attende.findByIdAndUpdate(req.userProfile._id, newAttende, { new: true })
    return res.status(200).json({ data: updateAttende })
  }

//pantalla administrador , ruta privada solo para administrador 
const dashboard = async (req, res) => {
    return res.status(200).json({ message: "¡Bienvenido al panel de administrador!" });
}


  


  module.exports = { selectAttende, register , login , modifyAttende , dashboard };