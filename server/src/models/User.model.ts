import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

// 1. Interface for User document (with methods)
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  googleId: string;
  comparePassword(candidatePassword: string): Promise<boolean>;

}

// 2. Schema definition
const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    googleId: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);

// 3. Pre-save hook to hash password
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 4. Instance method
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

// 5. Model typing
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
