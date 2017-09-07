export const jobReducer = (state = [], action) => {
  switch (action.type) {
    case 'JOB_LIST_SUCCESS':
      console.log('test',action.jobs);
          return action.jobs;
    default:
          return state;
  }
};