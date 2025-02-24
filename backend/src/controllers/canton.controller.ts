import { Canton } from "../models/Canton";

export const getCantons = async () => {
  return await Canton.findAll();
};
