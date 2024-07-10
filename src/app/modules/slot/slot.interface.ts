import { Types } from "mongoose";

export type TSlot = {
  service: Types.ObjectId; // eta k referring korb
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: string;
};
