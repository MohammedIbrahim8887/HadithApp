import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import QuranComponent from "./QuranComponent";

function App() {
  const [verse, setVerse] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <QuranComponent />
    </>
  );
}

export default App;
