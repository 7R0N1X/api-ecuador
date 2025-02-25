import { Border } from "../models/Border";

export const getBorders = async () => {
  return await Border.findAll();
};
