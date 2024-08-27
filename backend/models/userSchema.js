import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain atleast 3 characters."],
    maxLength: [38, "Name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide valid email."],
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  niches: {
    firstNiche: String,
    secondNiche: String,
    thirdNiche: String,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain atleast 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters."],
    select: false,
  },
  resume: {
    public_id: String,
    url: String,
  },
  coverLetter: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["Job Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async(next) => {
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})
userSchema.methods.comparePassword = async(enteredPassword) => {
    return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.methods.getJWTToken = ()=> {
    const secret = process.env.JWT_SECRET
    const expire = process.env.JWT_EXPIRE
    return jwt.sign({id: this._id}, secret, {
        expiresIn: expire
    })
}

const User = mongoose.model("user", userSchema)

export default User