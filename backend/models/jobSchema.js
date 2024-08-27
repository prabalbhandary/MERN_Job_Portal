import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    enum: ["Full-time", "Part-time"],
  },
  location: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  introduction: { type: String },
  responsibilities: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  offers: { type: String },
  salary: {
    type: String,
    required: true,
  },
  hiringMultipleCandidates: {
    type: String,
    default: "No",
    enum: ["Yes", "No"],
  },
  personalWebsite: {
    title: String,
    url: String,
  },
  jobNiche: {
    type: String,
    required: true,
  },
  newsLetterSent: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Job = mongoose.model("job", jobSchema)

export default Job