import axios from "axios"

// This is an example of async call with redux
export function fetchSearch(search){
  return function(dispatch){
      dispatch({
        type: "FETCH_SEARCH",
        payload: axios.get("/resultpage/"+search).catch (function(err) {
          dispatch ({
            type:"FETCH_SEARCH_REJECTED",
            payload:err
          })
        })
      })
  }
}

