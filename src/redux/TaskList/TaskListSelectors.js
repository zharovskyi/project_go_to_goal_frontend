export const getActivePosts = store =>
  store.tasks.filter(task => task.inActive === true);

export const getDonePosts = store =>
  store.tasks.filter(task => task.inActive === false);

export const getGoalData = store => store.goal;
