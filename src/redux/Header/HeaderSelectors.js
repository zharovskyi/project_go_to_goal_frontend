export const getGoalPoints = s => s.goal.points;

export const getTitle = s => s.goal.title;

export const getTasks = s => s.tasks;

export const getTasksPoints = s => {
  const tasks = getTasks(s);
  return tasks
    .filter(el => el.isDone === true)
    .reduce((total, el) => total + el.points, 0);
};

export const getPercent = s => {
  const goal = getGoalPoints(s);
  const tasks = getTasksPoints(s);
  return (tasks / goal) * 100;
};
