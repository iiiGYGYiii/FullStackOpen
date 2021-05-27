// MODULES
import { useDispatch } from "react-redux";
import anecdoteReducer from "../../reducers/anecdoteReducer";
// STYLES
import "./AnecdoteForm.styles.css";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    dispatch(anecdoteReducer.addAnecdote(anecdote));
    event.target.anecdote.value = "";
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

export default AnecdoteForm;
