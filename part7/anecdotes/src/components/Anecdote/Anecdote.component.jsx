// STYLES
import "./Anecdote.styles.css";

const Anecdote = ({ anecdote }) => ( anecdote?<>
    <h2>{anecdote.content}</h2>
    <h3>By: {anecdote.author}</h3>
    <p>Has {anecdote.votes} votes.</p>
    <em>For more info see <a href={anecdote.info}>{anecdote.info}</a></em>
  </>:<h1>404</h1>
);

export default Anecdote;
