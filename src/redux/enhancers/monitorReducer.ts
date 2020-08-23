// This function measures performance and time precision of dispatched redux actions
type num = number;
type createStoreType = any;
type action = any;
type state = any;
type enhancer = any;
type reducer = any;

const round = (number: num) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore: createStoreType) => (
  reducer: reducer,
  initialState: state,
  enhancer: enhancer
) => {
  const monitorReducer = (state: state, action: action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);
    console.log('reducer process time:', diff);
    return newState;
  };
  return createStore(monitorReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
