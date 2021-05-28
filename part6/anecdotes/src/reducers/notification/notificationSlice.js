const initialState = "";

const notificationReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "message/NEW_NOTE":
      return `You've voted for ${action.data}!`;
    case "message/NEW_ANECDOTE":
      return `You've created ${action.data}`;
    case "message/CLEAR":
      return "";
    default:
      return state;
  }
};

export const anecdoteMessage = (anecdote) =>{
  return {
    type: "message/NEW_ANECDOTE",
    data: anecdote
  };
};

export const voteMessage = anecdote =>{
  return{
    type: "message/NEW_NOTE",
    data: anecdote
  };
};

export const resetNotification = () =>{
  return{
    type: "message/CLEAR"
  };
};

export default notificationReducer;
