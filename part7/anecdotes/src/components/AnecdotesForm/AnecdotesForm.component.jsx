//MODULES
import { useField } from "../../utils/hooks";
import { useHistory } from "react-router-dom";
//STYLES
import "./AnecdotesForm.styles.css";

const AnecdotesForm = ({ setAnecdotes, id, setMessage}) =>{
  const history = useHistory();
  const { clearValue: clearContent, ...content } = useField("text");
  const { clearValue: clearAuthor, ...author} = useField("text");
  const { clearValue: clearInfo, ...info}  = useField("text");

  const clearForm = () =>{
    clearContent();
    clearAuthor();
    clearInfo();
  }

  const handleSubmit= (event)=>{
    event.preventDefault();
    const anecdote = {
      content: content.value,
      author: author.value,
      info: info.value
    }
    setAnecdotes(prevState=>[
        ...prevState,
        {
          ...anecdote,
          votes: 0,
          id: String(id)
        }
      ]);
    setMessage(`"${content.value}" has been created!`);
    setTimeout(()=>{
      setMessage("");
    },10000);
    clearForm();
    history.push("/");
  };

  return(<div className="form-container"><form className="anecdote-form" onSubmit={handleSubmit}>
    <label htmlFor="content">
      Content
    </label>
    <input
      className="input-field"
      id = "content"
      name = "content"
      {
        ...content
      }
      required
    />
    <label htmlFor="author">
      Author
    </label>
    <input
      className="input-field"
      id="author"
      name = "author"
      {
        ...author
      }
      required
    />
    <label htmlFor="info">
      Info
    </label>
    <input
      className="input-field"
      id="info"
      name = "info"
      {
        ...info
      }
      required
    />
    <div>
    <input
      id="clear"
      type="button"
      value="Clear"
      className="submit-btn"
      onClick={clearForm}
    />
    <button
      type="submit"
      className="submit-btn"
    >
    Submit
    </button>
    </div>
  </form></div>)
};

export default AnecdotesForm;
