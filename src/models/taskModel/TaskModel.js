//db queris go inside this file
import TaskSchema from "./TaskSchema.js";

// C
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// R
export const showTasks = () => {
  return TaskSchema.find();
};
// U
export const updateTasks = ({ _id, type }) => {
  return TaskSchema.findByIdAndUpdate(
    _id,
    {
      type: type,
    },
    { upsert: true, new: true }
  );
};
// D
export const deleteTasks = (_id) => {
  return TaskSchema.findOneAndDelete(_id);
};
