import express from "express";
import {
  deleteTasks,
  insertTask,
  showTasks,
  updateTasks,
} from "../models/taskModel/TaskModel.js";

const router = express.Router();

// Get data
router.get("/", async (req, res) => {
  try {
    const task = await showTasks();
    if (task) {
      res.json({ status: "success", task });
    } else {
      console.log("Tasks not found");
      res.status(404).json({ error: "Tasks not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST data
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    if (result?._id) {
      res
        .status(200)
        .json({ status: "success", message: "New data has been added" });
    } else {
      res.json({
        status: "fail",
        message: "Failed to add new data",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      error: "Internal server error",
    });
  }
});

// Update task
router.patch("/", async (req, res) => {
  try {
    const result = await updateTasks(req.body);

    result?._id
      ? res.json({ message: "updated", result })
      : res.json({ message: "invalid request" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete task
router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await deleteTasks(_id);
    if (result.deletedCount === 1) {
      res.json({ message: "Your task has been deleted" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
