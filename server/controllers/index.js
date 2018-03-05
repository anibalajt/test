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

export const filter = (req, res) => {
  const { stars } = req.query;
  const hoteles = data.filter(hotel => {
    return hotel.stars == stars ? hotel : null;
  });
  res.status(201).send(hoteles);
};
