// MODULES
import { connect } from "react-redux";
import { voteAnecdoteCall } from "../../reducers/anecdotes/anecdotesSlice";
// STYLES
import "./Anecdote.styles.css";

const Anecdote = ({ voteDispatch, anecdote }) =>{
  const handleClick = (event) =>{
    event.preventDefault();
    voteDispatch(anecdote.id)
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

const mapDispatchToProps = {
  voteDispatch: voteAnecdoteCall
}

const ConnectedAnecdote = connect(null, mapDispatchToProps)(Anecdote);

export default ConnectedAnecdote;
