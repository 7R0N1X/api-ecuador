import { Languages } from "../../models/v1/Languages";

export const getLanguages = async () => {
  return await Languages.findAll({ attributes: ["id", "name"] });
};
