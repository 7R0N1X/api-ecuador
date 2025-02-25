import { Region } from "../../models/v1/Region";

export const getRegions = async () => {
  return await Region.findAll({ order: [["id", "ASC"]] });
};
