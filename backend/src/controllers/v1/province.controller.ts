import { Canton } from "../../models/v1/Canton";
import { Province } from "../../models/v1/Province";

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
