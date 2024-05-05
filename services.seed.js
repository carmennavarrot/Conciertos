const mongoose = require('mongoose');
const service = require ('./src/api/models/sevices.model') 

const servicios = [
    {
      name: "bar",
      type: ["alcoholic beverages", "non-alcoholic beverages"]
    },
    {
      name: "disabled_zone",
      characteristics: ["wheelchair accessibility", "reserved space"]
    },
    {
      name: "food_zone",
      type: ["fast food", "local food"]
    },
    {
      name: "restrooms",
      type: ["male restrooms", "female restrooms", "unisex restrooms"]
    },
    {
      name: "security",
      additionalServices: ["security personnel", "emergency medical team"]
    }
  ];
mongoose
  .connect("mongodb+srv://carmennavarrotornay:QAhJlY4w9WGWH2YR@cluster0.1fa4h6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    const serviceDB = await service.find();
    if(serviceDB.length !== 0){
        await service.collection.drop();
    }
  })
  .catch((err) => console.log(err))
  .then(async () => {
    await service.insertMany(serviceDocument); 
  })
  .catch((error) => console.log(error))
  .finally(() => mongoose.disconnect());
  