import { Languages } from "../models/Languages";

export const getLanguages = async () => {
  return await Languages.findAll({ attributes: ["id", "name"] });
};
