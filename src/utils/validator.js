const Attende = require('../api/models/attende.model');
// valido email
const validateEmail = async (emailAttende) => {
    try {
        const ValidateEmail = await Attende.findOne({email: emailAttende});
        return ValidateEmail;
    } catch (error) {
        console.log(error);
    }
};
// valido contraseña
const validatepassword = (pass) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return regex.test(pass); 
}

module.exports =  {validateEmail , validatepassword };