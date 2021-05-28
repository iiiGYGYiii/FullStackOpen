// MODULES
import { useDispatch } from "react-redux";
import { addAnecdote } from "../../reducers/anecdotes/anecdotesSlice";
import { anecdoteMessage, resetNotification } from "../../reducers/notification/notificationSlice"
// STYLES
import "./AnecdoteForm.styles.css";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    dispatch(addAnecdote(anecdote));
    dispatch(anecdoteMessage(anecdote));
    setTimeout(() =>{
      dispatch(resetNotification());
    }, 5000);
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
