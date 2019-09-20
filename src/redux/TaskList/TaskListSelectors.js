export const getActivePosts = store =>
  store.tasks.filter(task => task.isActive === true);

export const getDonePosts = store =>
  store.tasks.filter(task => task.isActive === false);

export const getGoalData = store => store.goal;
