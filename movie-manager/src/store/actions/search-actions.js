
export const SEARCH_CLEAR = "search/CLEAR";
export const SEARCH = "search/SEARCH";
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS";
export const SEARCH_FAILURE = "search/SEARCH_FAILURE";

export function searchStart() {
  return {
      type: SEARCH
  };
}

export function searchSuccess(title) {
  return {
      type: SEARCH_SUCCESS,
      payload: title
  };
}

export function searchFailure(err) {
    return {
        type: SEARCH_FAILURE,
        payload: err
    };
}

export function searchClear() {
  return {
    type: SEARCH_CLEAR
  }
}


