import express from "express";
// import hotel from "../controllers/hotel";
import { hotels, filter } from "../controllers/index";
// import location from "../controllers/ubicacion";
let api = express.Router();

//Rutas publicas
// api.get("/getHotel", hotel.getHotel); //cargamos la descripcion del hotel
api.get("/getHotels", hotels); //buscamos los hoteles disponibles de una ciudad
api.get("/filter", filter);

module.exports = api;
