import { Parish } from "../../models/v1/Parish";

export const getParishes = async () => {
  return await Parish.findAll();
};
