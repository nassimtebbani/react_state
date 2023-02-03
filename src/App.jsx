import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
const person = {
  fullName: "nassim tebbani",
  bio: "blablaa",
  imgSrc:
    "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202301170247s",
  profession: "full stack dev & designer",
};
const App = () => {
  const [sec, setSec] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="App">
      <p>{sec}</p>
      <button onClick={() => setShow(!show)}>show profile</button>
      {show && (
        <div>
          <img src={person.imgSrc} alt={person.fullName} />
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <p>{person.profession}</p>
        </div>
      )}
    </div>
  );
};

export default App;
