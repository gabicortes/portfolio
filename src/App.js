import "./App.css";
import { Greetings } from "./Home/Greetings/Greetings";
import { Presentation } from "./Home/Presentation/Presentation";
import { MyOffer } from "./Home/MyOffer/MyOffer";
import { ProgrammingSkills } from "./Home/ProgrammingSkills/ProgrammingSkills";
import { Projects } from "./Home/Projects/Projects";
import { Contact } from "./Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Presentation />
      <MyOffer />
      <ProgrammingSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
