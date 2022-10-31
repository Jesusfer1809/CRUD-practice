import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The task must have a title"],
      trim: true,
      maxLength: [40, "Title must be less than 40 chars"],
    },
    description: {
      type: String,
      trim: true,
      maxLength: [200, "Description must be less than 200 chars"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Task || model("Task", taskSchema);
