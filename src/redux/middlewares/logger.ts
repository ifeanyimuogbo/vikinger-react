// This function logs redux activities to the console
type store = any;
type next = any;
type action = any;
const logger = (store: store) => (next: next) => (action: action) => {
  console.log(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
