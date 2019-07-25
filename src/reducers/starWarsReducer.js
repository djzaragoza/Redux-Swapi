import { FETCHING, SUCCESS, FAILURE } "../actions";
const initialState = {
  characters: [],
  fetchingL: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return{
        ...state,
        fetching: true,
        error: ""
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ""
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
