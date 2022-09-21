export const ADD_MOVIE = "ADD_MOVIE";
export const favorateMovieAddAction = (favoriteState: any) => {
  return {
    type: "ADD_MOVIE",
    payload: {
      movie: favoriteState.id,
    },
  };
};

export const DELETE_MOVIE = "DELETE_MOVIE";
export const favorateMovieDeleteAction = (favoriteState: any) => {
  return {
    type: "DELETE_MOVIE",
    payload: {
      movie: favoriteState.id,
    },
  };
};