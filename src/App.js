import "./App.css";
import { Greetings } from "./Home/Greetings/Greetings";
import { Presentation } from "./Home/Presentation/Presentation";
import { MyOffer } from "./Home/MyOffer/MyOffer";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Presentation />
      <MyOffer />
    </div>
  );
}

export default App;
