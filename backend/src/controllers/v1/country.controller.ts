import { Country } from "../../models/v1/Country";
import { Languages } from "../../models/v1/Languages";

export const getCountry = async () => {
  return await Country.findOne({
    include: [
      {
        model: Languages,
        as: "languages",
        attributes: ["id", "name"],
      },
    ],
  });
};
