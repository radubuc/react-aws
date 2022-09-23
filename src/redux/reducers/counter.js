//REDUX 6 VIDEO NOTES
import { INCREMENT, DECREMENT } from "../actions"; //Don't need to specify /actions/index because JS/Node JS is smart enough to figure it out

//initialState object needed. Need to set to 0, otherwise would be null on first run and trigger errors
const initialState = {
    count: 0,
    // countByTwo: 0 //Can do with one reducer if I add state here and shove the rest of the code into the original reducer and action and component files. How do I know if I need multiple reducers? If state is completely different, different domain or use case or logically don't go together. Don't create reducer for each state variable. State belongs together, and multiple state variables can be part of the same reducer. In short, just stick to one reducer if possible!

};

//Reducer will be argument in createStore(). Will receive action dictated by Counter component. Updates state by dispatching action, but doesn't receive new, updated state yet. Need optional argument in export statement for Counter component for that. Reducer listens to when state update happens. It receives action. Based on what action it receives (increment or decrement), it updates state accordingly.
const reducer = (state = initialState, action) => {
    switch (action.type) {
      //Cases are now using INCREMENT and DECREMENT variables from actions/index.js, instead of string values. Therefore, need to import them above
      case INCREMENT:
        return {
          count: state.count + 1
        };
  
      case DECREMENT:
        return {
          count: state.count - 1
        };
      
      default:
        return state; //If we somehow pass in something other than INCREMENT or DECREMENT, return original state (AKA don't increment or decrement). Good practice to prevent code from crashing
    }
  }

  //Now that code has been refactored and correct folder structure is set up, we must export the reducer
  export default reducer;