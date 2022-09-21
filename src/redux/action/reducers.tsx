import * as Actions from "./action";
import {favoriteIdInitialState,} from "../store/initialState";
import { combineReducers } from "redux";

export const FavoriteMovieReducer = (
    state = favoriteIdInitialState,
    action: any
  ) => {
    switch (action.type) {
      case Actions.ADD_MOVIE:
        return {
          favorite: [...state.favorite, action.payload],
        };
      case Actions.DELETE_MOVIE:
        return {
          favorite: state.favorite.filter(
            (favorites) => favorites.movieinfo.id !== action.payload.movieinfo.id
          ),
        };
      default:
        return state;
    }
  };