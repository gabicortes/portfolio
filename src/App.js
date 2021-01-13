import "./App.css";
import { Greetings } from "./Home/Greetings/Greetings";
import { Presentation } from "./Home/Presentation/Presentation";
import { MyOffer } from "./Home/MyOffer/MyOffer";
import { Technologies } from "./Home/Technologies/Technologies";
import { Projects } from "./Home/Projects/Projects";
import { Contact } from "./Home/Contact/Contact";
import { NavBar } from "./NavBar/NavBar";
import { FloatingButton } from "./FloatingButton/FloatingButton";
import { useRef } from "react";
import { BsFillPersonLinesFill, BsCodeSlash } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { Foot } from "./Home/Foot/Foot";

function App() {
  const firstButtonSectionRef = useRef(null);
  const secondButtonSectionRef = useRef(null);
  const thirdButtonSectionRef = useRef(null);
  const fourthButtonSectionRef = useRef(null);
  const fifthButtonSectionRef = useRef(null);

  return (
    <div className="App">
      <Greetings />
      <div ref={firstButtonSectionRef}>
        <Presentation />
      </div>
      <div ref={secondButtonSectionRef}>
        <MyOffer />
      </div>
      <div ref={thirdButtonSectionRef}>
        <Technologies />
      </div>
      <div ref={fourthButtonSectionRef}>
        <Projects />
      </div>
      <div ref={fifthButtonSectionRef}>
        <Contact />
      </div>
      <div>
        <Foot />
      </div>
      <NavBar
        firstButton={<BsFillPersonLinesFill className="iconVectorNavBar" />}
        firstButtonSectionRef={firstButtonSectionRef}
        secondButton={<BsCodeSlash className="iconVectorNavBar" />}
        secondButtonSectionRef={secondButtonSectionRef}
        thirdButton={<FaReact className="iconVectorNavBar" />}
        thirdButtonSectionRef={thirdButtonSectionRef}
        fourthButton={
          <AiOutlineFundProjectionScreen className="iconVectorNavBar" />
        }
        fourthButtonSectionRef={fourthButtonSectionRef}
        fifthButton={<IoMdContacts className="iconVectorNavBar" />}
        fifthButtonSectionRef={fifthButtonSectionRef}
      />
      <FloatingButton />
    </div>
  );
}

export default App;
