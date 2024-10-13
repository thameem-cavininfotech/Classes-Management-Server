import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    require: true,
  },
  className: {
    type: String,
    require: true,
  },
  classStrength: {
    type: Number,
    require: true,
  },
  classTeacherName: {
    type: String,
    require: true,
  },
  classId: {
    type: String,
    require: true,
  },
  totalClasses: {
    type: Number,
    require: true,
  },
});
export default mongoose.model("class", classSchema);
