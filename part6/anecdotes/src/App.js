// COMPONENTS
import AnecdoteList from "./components/AnecdoteList/AnecdoteList.component";
import AnecdoteForm from "./components/AnecdoteForm/AnecdoteForm.component";
//STYLES
import './App.css';


const App = () =>{
  return (
    <div>
      <h2>Anecdotes: </h2>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  );
}

export default App;
