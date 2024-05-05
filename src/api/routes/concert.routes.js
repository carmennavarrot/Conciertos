const express = require("express");
const router = express.Router();
const { selectConcert,addConcert, updateConcert, selectOneConcertStyle ,selectConcertDate,selectConcertLocation,  deleteConcert } = require("../controllers/concert.controller");


router.post("/concerts", addConcert);
router.put("/concerts/update" ,updateConcert);
router.get("/concerts/One",selectConcert);
router.get("/concerts/style/:style",selectOneConcertStyle);
router.get("/concerts/date/:date",selectConcertDate);
router.get("/concerts/location/:location",selectConcertLocation);
router.delete("/concerts/delete/:id",deleteConcert);

module.exports = router;