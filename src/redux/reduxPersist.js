// Funtion to selectively persist redux state in localStorage

// Load redux state function
export const loadState = () => {
  // Try block
  try {
    // Get saved state
    const serializedState = localStorage.getItem('VikingerState');
    //Check if state is null and return undefined
    if (serializedState === null) {
      return undefined;
    }
    //Parse the serialized state
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

//Save redux state function
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('VikingerState', serializedState);
  } catch (err) {
    console.log(err);
  }
};
