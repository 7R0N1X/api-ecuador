import { Country } from "../models/Country";
import { Languages } from "../models/Languages";

export const getCountry = async () => {
  return await Country.findOne({include: [{
    model: Languages,
    as: "languages",
    attributes: ["id", "name"],
  }]});
};
