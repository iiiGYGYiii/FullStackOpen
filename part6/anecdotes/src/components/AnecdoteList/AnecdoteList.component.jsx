// MODULES
import { useSelector } from "react-redux";
// COMPONENTS
import Anecdote from "../Anecdote/Anecdote.component";
// STYLE
import "./AnecdoteList.styles.css";

const anecdotesSelector = state=>state.anecdotes;

const AnecdoteList = () =>{
  const anecdotes = useSelector(anecdotesSelector);

  return(<>
    {anecdotes.sort((a,b)=>b.votes-a.votes).map(anecdote => <Anecdote
      anecdote={anecdote}
      key = {anecdote.id}
    />)}
    </>
  );
};

export default AnecdoteList;
