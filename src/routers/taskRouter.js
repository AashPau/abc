import express from "express";
import { insertTask } from "../models/taskModel/TaskModel.js";
const router = express.Router();

//controllers

//get data

router.get("/", (req, res) => {
  res.json({
    message: `Welcome to the API!`,
    data: fakeDb,
  });
});

//POST data

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          message: `New data has been added`,
        })
      : res.json({
          message: `Failed to add new data`,
        });
  } catch (error) {
    console.log(error);
  }
  // const id = idGenerator();
  // console.log(req.body);
  // fakeDb.push({ ...req.body, id }); //add to the database
});

//update task
router.patch("/", (req, res) => {
  const { id, type } = req.body;
  fakeDb = fakeDb.map((item) => {
    if (item.id === id) {
      return { ...item, type };
    }
    return item;
  });
  res.json({
    message: "your task has been updated",
  });
});

//delete task
router.delete("/", (req, res) => {
  const { id } = req.body;
  fakeDb = fakeDb.filter((item) => item.id !== id);
  res.json({
    message: "your task has been deleted",
  });
});

export default router;
