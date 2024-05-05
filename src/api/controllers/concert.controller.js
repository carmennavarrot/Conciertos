const Concert = require('../models/concert.model');

//ver conciertos
const selectConcert = async (req, res) => {
    const concerts = await Concert.find();
    return res.status(200).json(concerts)
}
//añadir conciertos
const addConcert = async(req, res) => {
    try {
        console.log(req.body)
        const newConcert = new Concert(req.body)
        const findConcert = await Concert.find({ name: req.body.name })
        console.log(findConcert)
        if(findConcert.length !== 0){
            return res.json({message: 'Este concierto ya está reistrado'})
        }
        const createConcert = await newConcert.save();
        return res.json(createConcert)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
        
    }
}
//editar concierto
const updateConcert = async(req, res) =>{
    try {
        const{ id } = req.params;
        const concertBody = new Concert(req.body) //los nuevos datos del concierto se añaden al modelo 
        const updateConcert = await Concert.findByIdAndUpdate(id, concertBody, {new: true})
        console.log(updateConcert)
        if(!updateConcert){
            return res.status(404).json({message: 'El concierto no existe'})
        }
        return res.status(200).json(updateConcert)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
        
    }
}
//ver conciertos por estilos
const selectOneConcertStyle = async (req, res) =>{
    try {
        const{ style } = req.params;
        const findConcert = await Concert.findOne({style: style})
        return res.status(200).json(findConcert)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
//ver conciertos por fecha
const selectConcertDate = async (req, res) =>{
    try {
        const { date } = req.params;
        const findConcert =  await Concert.find({ date: { $gte: date } }).sort({date: 1});
        return res.status(200).json(findConcert)
    } catch (error) {
        res.status(500).json(error);
      }
    
}
//ver conciertos por localización
const selectConcertLocation = async (req, res) =>{
    try {
        const { location } = req.params;
        const findConcert = await Concert.find({location: location})
        return res.status(200).json(findConcert)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
}
//borrar concierto
const deleteConcert = async(req, res) =>{
    try {
        const id= req.params.id;
        const deleteConcert = await Concert.findByIdAndDelete(id);
        if(!deleteConcert) {
            return res.status(404).json({ message: 'El concierto no existe'})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

module.exports = { selectConcert,addConcert, updateConcert, selectOneConcertStyle ,selectConcertDate,selectConcertLocation,  deleteConcert }
