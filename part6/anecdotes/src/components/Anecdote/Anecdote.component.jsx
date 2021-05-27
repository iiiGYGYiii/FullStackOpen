// MODULES
import { useDispatch } from "react-redux";
import anecdoteReducer from "../../reducers/anecdoteReducer";
// STYLES
import "./Anecdote.styles.css";

const Anecdote = ({ anecdote }) =>{
  const dispatch = useDispatch();
  const handleClick = (event) =>{
    event.preventDefault();
    dispatch(anecdoteReducer.voteAnecdote(anecdote.id));
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
