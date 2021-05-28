// COMPONENTS
import AnecdoteList from "./components/AnecdoteList/AnecdoteList.component";
import AnecdoteForm from "./components/AnecdoteForm/AnecdoteForm.component";
import Notification from "./components/Notification/Notification.component";
import Filter from "./components/Filter/Filter.component";
//STYLES
import './App.css';


const App = () =>{
  return (
    <div>
      <h2>Anecdotes: </h2>
      <div className="header-container">
        <AnecdoteForm/>
        <Filter/>
      </div>
      <Notification/>
      <AnecdoteList/>
    </div>
  );
}

export default App;
