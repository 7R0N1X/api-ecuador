import { Border } from "../../models/v1/Border";

export const getBorders = async () => {
  return await Border.findAll();
};
