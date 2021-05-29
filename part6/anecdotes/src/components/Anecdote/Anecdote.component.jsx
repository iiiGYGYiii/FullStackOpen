// MODULES
import { useDispatch } from "react-redux";
import { voteAnecdoteCall } from "../../reducers/anecdotes/anecdotesSlice";
import { voteMessageCaller } from "../../reducers/notification/notificationSlice";
// STYLES
import "./Anecdote.styles.css";

const Anecdote = ({ anecdote }) =>{
  const dispatch = useDispatch();
  const handleClick = (event) =>{
    event.preventDefault();
    dispatch(voteAnecdoteCall(anecdote.id));
    voteMessageCaller(anecdote.content);
  };
  return(<div className="anecdote">
    <div className="anecdote-content">
      {anecdote.content}
    </div>
    <div className="anecdote-options">
      <div className="anecdote-votes">
      has {anecdote.votes} votes
      </div>
      <div>
        <button onClick={handleClick}>
          Vote!
        </button>
      </div>
    </div>
  </div>);
};

export default Anecdote;
