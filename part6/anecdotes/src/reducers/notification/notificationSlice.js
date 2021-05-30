const initialState = "";

const notificationReducer = (state=initialState, action) =>{
  switch (action.type) {
    case "message/NEW_VOTE":
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
    type: "message/NEW_VOTE",
    data: anecdote
  };
};

export const resetNotification = () =>{
  return{
    type: "message/CLEAR"
  };
};

let oldTimeout;
let firstTime = true;

export const anecdoteMessageCaller = anecdote => (dispatch, getState)=>{
  dispatch(anecdoteMessage(anecdote));
  const actualTimeout = setTimeout(()=>{
    dispatch(resetNotification());
  }, 5000);
  if (firstTime){
    firstTime = false;
    oldTimeout = actualTimeout;
  }
  if (oldTimeout!==actualTimeout){
    clearTimeout(oldTimeout);
    oldTimeout = actualTimeout;
  }
};

export const voteMessageCaller = anecdote => (dispatch, getState)=>{
  dispatch(voteMessage(anecdote));
  const actualTimeout = setTimeout(()=>{
    dispatch(resetNotification());
  }, 5000);
  if (firstTime){
    firstTime = false;
    oldTimeout = actualTimeout;
  }
  if (oldTimeout!==actualTimeout){
    clearTimeout(oldTimeout);
    oldTimeout = actualTimeout;
  }
};

export default notificationReducer;
