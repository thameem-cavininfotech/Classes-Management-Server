import Class from "../model/classModel.js";
export const fetch = async (req, res) => {
  try {
    return res.json("Hell world.");
  } catch {
    res.status(500).json({ message: "Internal server error." });
  }
};
// ID FOR CLASSID FOR CRUD OPERATION
// CREATE A CLASS
export const create = async (req, res) => {
  try {
    const classData = new Class(req.body);
    const { classId } = classData;
    const classExist = await Class.findOne({ classId });
    if (classExist) {
      return res.status(400).json({ message: "Class already exits." });
    }
    const savedClass = await classData.save();
    res.status(201).json(savedClass);
  } catch {
    res.status(500).json({ error: "Internal server error." });
  }
};
//GET ALL CLASSES
export const getAllClasses = async (req, res) => {
  try {
    const classData = await Class.find();
    if (classData.length === 0)
      return res.status(404).json({ message: "Class Not Found." });
    res.status(200).json(classData);
  } catch {
    res.status(500).json({ error: "Internal server error." });
  }
};
//GET BY ID - CLASS
export const getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classId = await Class.findOne({ classId: id });
    if (!classId)
      return res.status(404).json({ message: "Class Not Found By Id" });
    res.status(200).json(classId);
  } catch {
    res.status(500).json({ error: "Internal server error." });
  }
};
// UPDATE BY ID - CLASS
export const updateClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classId = await Class.findOne({ classId: id });
    if (!classId)
      return res.status(404).json({ message: "Class couldn't update by id" });
    const updateClass = await Class.findByIdAndUpdate(classId._id, req.body, {
      new: true,
    });
    res.status(200).json(updateClass);
  } catch {
    res.status(500).json({ message: "Internal server error." });
  }
};
//DELETE BY ID - CLASS
export const deleteClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classId = await Class.findOne({ classId: id });

    if (!classId)
      return res.status(404).json({ message: "Class couldn't delete by id" });
    await Class.findByIdAndDelete({ _id: classId.id });
    res.status(200).json({ message: "Class deleted successfully." });
  } catch {
    res.status(500).json({ message: "Internal server error." });
  }
};
