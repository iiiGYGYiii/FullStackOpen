// MODULES
import { connect } from "react-redux";
import { useEffect } from "react";
import { getAnecdotes } from "../../services/anecdotesServices";
import { initAnecdotes } from "../../reducers/anecdotes/anecdotesSlice";
// COMPONENTS
import Anecdote from "../Anecdote/Anecdote.component";
// STYLE
import "./AnecdoteList.styles.css";

const AnecdoteList = ({ anecdotesState, initState}) =>{
  const anecdotes = anecdotesState;
  useEffect(()=>{
    getAnecdotes().then(data=>{
      initState(data);
    });
  },[initState]);
  return(<>
    {anecdotes.sort((a,b)=>b.votes-a.votes).map(anecdote => <Anecdote
      anecdote={anecdote}
      key = {anecdote.id}
    />)}
    </>
  );
};

const mapStateToProps = state => {
  return{
    anecdotesState: state.filter
    ?state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    :state.anecdotes
  }
}

const mapDispatchToProps = {
  initState: initAnecdotes
};

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

export default ConnectedAnecdoteList;
