// localStorage.js

// Load state from localStorage
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('posts');
      if (serializedState === null) {
        return undefined; // Let Redux initialize with its defaults
      }
      return JSON.parse(serializedState); // Parse the saved state back into JS object
    } catch (err) {
      console.error("Could not load state from localStorage:", err);
      return undefined;
    }
  };
  
  // Save state to localStorage
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('posts', serializedState);
    } catch (err) {
      console.error("Could not save state to localStorage:", err);
    }
  };
  