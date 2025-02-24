import { Parish } from "../models/Parish";

export const getParishes = async () => {
  return await Parish.findAll();
};
