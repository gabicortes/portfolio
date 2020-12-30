import "./App.css";
import { Greetings } from "./Home/Greetings/Greetings";
import { Presentation } from "./Home/Presentation/Presentation";
import { MyOffer } from "./Home/MyOffer/MyOffer";
import { ProgrammingSkills } from "./Home/ProgrammingSkills/ProgrammingSkills";
import { Projects } from "./Home/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Presentation />
      <MyOffer />
      <ProgrammingSkills />
      <Projects />
    </div>
  );
}

export default App;
