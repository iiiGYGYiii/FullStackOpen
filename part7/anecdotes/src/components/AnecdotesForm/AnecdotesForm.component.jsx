//MODULES
import { useState } from "react";
import { useHistory } from "react-router-dom";
//STYLES
import "./AnecdotesForm.styles.css";

const AnecdotesForm = ({ setAnecdotes, id, setMessage}) =>{
  const history = useHistory();
  const [anecdote, setAnecdote] = useState({
    content: "",
    author: "",
    info: ""
  });
  const handleSubmit= (event)=>{
    event.preventDefault();
    setAnecdotes(prevState=>{
      return[
        ...prevState,
        {
          ...anecdote,
          votes: 0,
          id: String(id)
        }
      ]
    });
    setMessage(`"${anecdote.content}" has been created!`);
    setTimeout(()=>{
      setMessage("");
    },10000);
    setAnecdote({
      content: "",
      author: "",
      info: ""
    });
    history.push("/");
  };

  const handleChange = e =>{
    setAnecdote(prevState=>{
      return{
        ...prevState,
        [e.target.name]:e.target.value
      }
    })
  };

  return(<div className="form-container"><form className="anecdote-form" onSubmit={handleSubmit}>
    <label htmlFor="content">
      Content
    </label>
    <input
      type="text"
      value = {anecdote.content}
      id = "content"
      name = "content"
      onChange={handleChange}
      required
    />
    <label htmlFor="author">
      Author
    </label>
    <input
      id="author"
      type="text"
      value = {anecdote.author}
      name = "author"
      onChange={handleChange}
      required
    />
    <label htmlFor="info">
      Info
    </label>
    <input
      id="info"
      type="text"
      value = {anecdote.info}
      name = "info"
      onChange={handleChange}
      required
    />
    <button
      type="submit"
      className="submit-btn"
    >
    Submit
    </button>
    
  </form></div>)
};

export default AnecdotesForm;
