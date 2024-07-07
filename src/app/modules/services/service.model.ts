import { Schema, model } from "mongoose";
import { TServices } from "./services.interface";
// 2. Create a Schema corresponding to the document interface.

const servicesSchema = new Schema<TServices>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number, //Duration in minutes
      required: true,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 3. Create a Model.
export const ServicesModel = model<TServices>("Services", servicesSchema);
