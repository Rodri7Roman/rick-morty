import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITE:
      const filteredFavorites = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        myFavorites: filteredFavorites,
      };
    default:
      return { ...state };
  }
};


export default reducer;