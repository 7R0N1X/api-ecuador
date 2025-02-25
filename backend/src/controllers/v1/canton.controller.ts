import { Canton } from "../../models/v1/Canton";

export const getCantons = async () => {
  return await Canton.findAll();
};
