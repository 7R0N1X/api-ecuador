import { Border } from "../../models/v1/Border";
import { Canton } from "../../models/v1/Canton";
import { Country } from "../../models/v1/Country";
import { Languages } from "../../models/v1/Languages";

export const getCountry = async () => {
  return await Country.findOne({
    attributes: { exclude: ["capital_id"] },
    include: [
      { model: Canton, as: "capital", attributes: ["id", "name"] },
      { model: Border, as: "borders", attributes: ["id", "name"] },
      { model: Languages, as: "languages", separate: true, attributes: ["id", "name"] },
    ],
  });
};
