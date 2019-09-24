export const getTitle = s =>
  s.session.user !== null ? s.session.user.title : '';

// ProgressBar
export const getGoalPoints = s => (s.goal !== null ? s.goal.points : 0);
//
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

// /user

export const userName = s => s.session.user.name;
export const userAge = s => s.session.user.age;
