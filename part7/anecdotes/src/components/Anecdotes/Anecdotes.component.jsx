// MODULES
import { Link } from "react-router-dom";
//STYLES
import "./Anecdotes.styles.css";
// COMPONENTS

const Anecdotes = ({ anecdotes, message }) =>{
  return(<div className="anecdotes-container">
  {
    message&& <div className="notification"><h3>{message}</h3></div>
  }
  <ul>
    {
      anecdotes.map((anecdote)=>{
        return ( <li className="anecdote-li" key={anecdote.id}>
          <Link to={`/anecdote/${anecdote.id}`} > {anecdote.content} </Link>
        </li>
        );
      })
    }
  </ul></div>);
};

export default Anecdotes;
