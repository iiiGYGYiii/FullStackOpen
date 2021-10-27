import "./App.css";
import { Content, Header, Total } from "./components";
import { courseParts } from "./data";

function App() {
  const courseName = "Half Stack application development";
  return (
    <div className="App">
      <Header title={courseName} />
      <Content courseParts={courseParts} />
      <Total
        total={courseParts.reduce(
          (carry, part) => carry + part.exerciseCount,
          0
        )}
      />
    </div>
  );
}

export default App;
