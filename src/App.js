import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("dark");
  const [dark, light] = useState("Set Light Mode");
  const [text, settext] = useState("text-white");
  const [my_style, set_style] = useState({
    color: "rgb(211 255 9)",
  });
  const [my_style_2, set_style_2] = useState({
    color: "rgb(3 255 132)",
  });
  const [head, sethead] = useState({
    color: "#f4feff",
  });
  const [border, setborder] = useState({
    borderColor: "#f4feff",
  });
  const [text_summary, newtext_summary] = useState({
    color: "#f4feff",
  });
  const [text_area, newtext_area] = useState({
    backgroundColor: "grey",
    color: "#1f1010",
  });
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      showalert("Dark Mode has been enabled", "success");
      light("Set Light Mode");
      settext("text-white");
      set_style({ color: "rgb(211 255 9)" });
      set_style_2({ color: "rgb(3 255 132)" });
      sethead({ color: "#f4feff" });
      setborder({ borderColor: "#f4feff" });
      newtext_summary({ color: "#f4feff" });
      newtext_area({ backgroundColor: "grey", color: "#1f1010" });
      document.body.style.backgroundColor = "#042743";
    } else {
      showalert("Light Mode has been enabled", "success");
      setmode("light");
      light("Set Dark Mode");
      settext("text-primary");
      set_style({ color: "rgb(0 9 184)" });
      set_style_2({ color: "rgb(108 131 0)" });
      sethead({ color: "rgb(48 69 182)" });
      setborder({ borderColor: "black" });
      newtext_summary({ color: "black" });
      newtext_area({
        backgroundColor: "rgb(33 94 147)",
        color: "rgb(229 235 237)",
      });
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="Textutils"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
        text={text}
        dark={dark}
        my_style={my_style}
        my_style_2={my_style_2}
        border={border}
      />
      <Alert alert={alert} />
      <div className="container my-2">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <Textform
          heading="Welcome To Textutils"
          subheading="Enter Your Text To Analyze"
          head={head}
          text_summary={text_summary}
          text_area={text_area}
          showalert={showalert}
        />
        {/* }
            </Route> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
