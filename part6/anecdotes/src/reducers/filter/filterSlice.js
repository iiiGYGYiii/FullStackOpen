const initialState = "";

const filterReducer = (state= initialState, action) =>{
  switch (action.type) {
    case "filter/CHANGE":
      return action.data;
    case "filter/RESET":
      return "";
    default:
      return state;
  }
}

export const changeFilter = change => {
  return{
    type: "filter/CHANGE",
    data: change
  };
};

export const resetFilter = () =>{
  return{
    type: "filter/RESET"
  };
};

export default filterReducer;
