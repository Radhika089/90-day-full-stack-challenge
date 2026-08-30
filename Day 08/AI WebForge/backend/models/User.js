import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async () => {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
