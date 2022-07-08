import { ActionType } from "../action-type";

export const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
    try {
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
