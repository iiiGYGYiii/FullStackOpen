// MODULES
import { useDispatch } from "react-redux";
import { addAnecdoteCall } from "../../reducers/anecdotes/anecdotesSlice";
import { anecdoteMessageCaller } from "../../reducers/notification/notificationSlice"
// STYLES
import "./AnecdoteForm.styles.css";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    dispatch(addAnecdoteCall(anecdote));
    dispatch(anecdoteMessageCaller(anecdote));
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

export default AnecdoteForm;
