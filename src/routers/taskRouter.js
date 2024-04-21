import express from "express";
import {
  deleteTasks,
  insertTask,
  showTasks,
  updateTasks,
} from "../models/taskModel/TaskModel.js";
const router = express.Router();

//controllers

//get data

router.get("/", async (req, res) => {
  try {
    const result = await showTasks();
    result ? res.json(result) : console.log("tasks not found");
  } catch (error) {
    console.log(error);
  }
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
});

//update task
router.patch("/", async (req, res) => {
  try {
    const { id, type } = req.body;
    const result = await updateTasks(id, type);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

//delete task
router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    const result = await deleteTasks(id);
    res.json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
  }

  // fakeDb = fakeDb.filter((item) => item.id !== id);
  // res.json({
  //   message: "your task has been deleted",
  // });
});

export default router;
