//db queris go inside this file
import TaskSchema from "./TaskSchema.js";

// C
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// R

// U

// D
