import { Canton } from "../models/Canton";
import { Province } from "../models/Province";

export const getProvinces = async () => {
  return await Province.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Canton,
        as: "capital",
        attributes: ["id", "name"],
      },
    ],
  });
};
