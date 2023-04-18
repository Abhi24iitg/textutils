import React from "react";
import { useState } from "react";
export default function Textform(props) {
  const toUppercase = () => {
    if (text !== "") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showalert("Converted to Uppercase", "success");
    }
  };
  const toLowercase = () => {
    if (text !== "") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showalert("Converted to Lowercase", "success");
    }
  };
  const blank = () => {
    if (text !== "") {
      let newText = "";
      setText(newText);
      props.showalert("Text Cleared", "success");
    }
  };
  const bold = () => {
    if (text !== "") {
      let newText = document.getElementById("box");
      newText.style.fontWeight = "bold";
      setText(text);
    }
  };
  const Underline = () => {
    if (text !== "") {
      let newText = document.getElementById("box");
      newText.style.textDecoration = "underline";
      setText(text);
    }
  };
  const Italic = () => {
    if (text !== "") {
      let newText = document.getElementById("box");
      newText.style.fontStyle = "Italic";
      setText(text);
    }
  };
  const tohandlecases = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showalert("Extra Spaces Removed", "success");
    }
  };
  const handlecopy = () => {
    let newtext = document.getElementById("box");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showalert("Copied to Clipboard", "success");
  };
  const original = () => {
    if (text !== "") {
      let newText = document.getElementById("box");
      newText.style.fontStyle = "Normal";
      newText.style.fontWeight = "Normal";
      newText.style.textDecoration = "none";
      setText(text);
    }
  };
  const handleOnChange = (Event) => {
    setText(Event.target.value);
  };
  const noofwords = () => {
    if (text === "") return 0;
    else {
      return text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length;
    }
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 className="heading" style={props.head}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="box" className="form-label">
            <h5 style={props.head}>{props.subheading}</h5>
          </label>
          <textarea
            className="form-control"
            value={text}
            style={props.text_area}
            onChange={handleOnChange}
            id="box"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={blank}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={bold}>
          <i className="fa fa-bold" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary mx-2" onClick={Underline}>
          <i className="fa fa-underline" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary mx-2" onClick={Italic}>
          <i className="fa fa-italic" aria-hidden="true"></i>
        </button>
        <button className="btn btn-primary mx-2" onClick={tohandlecases}>
          remove extraspaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy Text
        </button>
      </div>
      <div className="classname my-4 mx-4">
        <button className="btn btn-primary" onClick={original}>
          Convert to Original
        </button>
      </div>
      <div className="container my-4">
        <h3 style={props.text_summary}>Your Text Summary </h3>
        <p style={props.text_summary}>No Of Words:{noofwords()}</p>
        <p style={props.text_summary}>No of Charcters:{text.length}</p>
      </div>
    </>
  );
}
