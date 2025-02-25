import { Region } from "../models/Region";

export const getRegions = async () => {
  return await Region.findAll({order: [["id", "ASC"]]});
};
