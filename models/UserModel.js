import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please, tell us your name!"],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please, tell us your email"],
    },
    photo: {
      type: String,
      default: "https://i.imgur.com/62MNvNU.png",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.User || model("User", userSchema);
