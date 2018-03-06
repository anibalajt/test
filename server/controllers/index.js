import _ from "underscore";
import data from "../data/data.json";
/******************************************************************************/
/**************************Cargar la lista de hoteles ************************/
/******************************************************************************/

export const hotels = (req, res) => {
  const { limit, offset } = req.query;

  const hoteles = data.slice(offset, limit);
  res.status(201).send(hoteles);
};

/******************************************************************************/
/************************ Filtrar por nombre y estrellas **********************/
/******************************************************************************/
export const filter = (req, res) => {
  let { stars, name, offset, limit } = req.query;
  let hoteles;
  if (stars) {
    stars = stars.split(",");
    hoteles = filterStar(data, stars);
  }
  if (name) {
    hoteles = hoteles ? hoteles : data;
    hoteles = filterName(hoteles, name);
  }
  if (!hoteles) {
    hoteles = data;
  }
  hoteles = hoteles.slice(offset, limit);
  res.status(201).send(hoteles);
};

const filterStar = (data, stars) => {
  return data.filter(hotel => {
    for (let i = 0; i < stars.length; i++) {
      if (hotel.stars == stars[i]) {
        return hotel;
      }
    }
  });
};

const filterName = (data, name) => {
  return data.filter(hotel => {
    return hotel.name.indexOf(name) > -1 ? hotel : null;
  });
};
