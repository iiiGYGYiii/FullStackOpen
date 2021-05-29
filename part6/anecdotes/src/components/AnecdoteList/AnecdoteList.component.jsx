// MODULES
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAnecdotes } from "../../services/anecdotesServices";
import { initAnecdotes } from "../../reducers/anecdotes/anecdotesSlice";
// COMPONENTS
import Anecdote from "../Anecdote/Anecdote.component";
// STYLE
import "./AnecdoteList.styles.css";

const anecdotesSelector = state=> state.filter? state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)) :state.anecdotes;

const AnecdoteList = () =>{
  const anecdotes = useSelector(anecdotesSelector);
  const dispatch = useDispatch();
  useEffect(()=>{
    getAnecdotes().then(data=>{
      dispatch(initAnecdotes(data));
    });
  },[dispatch]);
  return(<>
    {anecdotes.sort((a,b)=>b.votes-a.votes).map(anecdote => <Anecdote
      anecdote={anecdote}
      key = {anecdote.id}
    />)}
    </>
  );
};

export default AnecdoteList;
