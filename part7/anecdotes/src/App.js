// MODULES
import { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import initialAnecdotes from "./utils/initialAnecdotes";
// STYLES
import './App.css';
// COMPONENTS
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import About from "./components/About/About.component";
import Anecdotes from "./components/Anecdotes/Anecdotes.component";
import Anecdote from "./components/Anecdote/Anecdote.component";
import AnecdotesForm from "./components/AnecdotesForm/AnecdotesForm.component";

function App() {
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [message, setMessage] = useState("");
  const anecdotesMatch = useRouteMatch("/anecdote/:id");
  const anecdote = anecdotesMatch&&anecdotes.find(anecdote=>anecdote.id===anecdotesMatch.params.id);
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route path="/about">
            <main>
              <About />
            </main>
          </Route>
          <Route path="/anecdote/:id">
            <main className="anecdote-info">
              <Anecdote anecdote={anecdote}/>
            </main>
          </Route>
          <Route path="/create">
            <main>
              <AnecdotesForm
                id= {Math.max(...anecdotes.map(a=>a.id))+1}
                setAnecdotes={setAnecdotes}
                setMessage={setMessage}
              />
            </main>
          </Route>
          <Route path="/">
          <main>
            <Anecdotes
              message={message}
              anecdotes={anecdotes}
            />
            </main>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
