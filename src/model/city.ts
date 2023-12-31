import mongoose, { Schema } from "mongoose";

import { City } from "../utils/types/City";

const citySchema = new Schema({
  name: { type: String, unique: true },
  area: Number,
  population: Number,
  density: Number,
}).set("toJSON", {
  transform: function (doc, ret) {
    delete ret.__v;
  },
});

export const CityModel = mongoose.model<City>("City", citySchema);
