// MODULES
import { connect } from "react-redux";
import { addAnecdoteCall } from "../../reducers/anecdotes/anecdotesSlice";
// STYLES
import "./AnecdoteForm.styles.css";

const AnecdoteForm = ({ addAnecdote }) => {
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    addAnecdote(anecdote);
    e.target.anecdote.value = "";
  };
  return(
    <div className="anecdote">
      <form autoComplete="off" onSubmit={handleSubmit} className="anecdoteForm">
        <input name="anecdote" type="text" required/>
        <input className="add-anecdote-btn" type="submit" value="Add Anecdote"/>
      </form>
    </div>    
  );
};

const mapDispatchToProps = {
  addAnecdote: addAnecdoteCall
};
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
