export const getTaskError = store =>
  store.dashboardErrors.map(el => el.message);
export const getModalCleanTask = store => store.dashboardErrors.clean();

export const e = () => null;
