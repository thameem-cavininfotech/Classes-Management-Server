import express from "express";
import {
  create,
  deleteClassById,
  fetch,
  getAllClasses,
  getClassById,
  updateClassById,
} from "../controller/classController.js";

const route = express.Router();
route.get("/fetch", fetch);
route.post("/create", create);
route.get("/classes", getAllClasses);
route.get("/:id", getClassById);
route.delete("/:id", deleteClassById);
route.put("/:id", updateClassById);

export default route;
