import React, {useState} from 'react'

export default function Textform(prop) {

    const [text, setText] = useState('');
    // text = "jfcjsd" aise change nhi karna hai nhi toh yeh error aayega
    // setText = "jfcedkjnf"  aise changfe karna hai

    const handleUpClick = () => {
        // console.log("click uppercase");
        // setText("ndseknk");
        let newText = text.toUpperCase();
        setText(newText);
        prop.alert("success","This is Uppercase");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        prop.alert("success","This is Lowercase");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleToClear = () => {
        setText("");
        prop.alert("success","Clear");
    }

    const handleToCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        prop.alert("success","Copy to clipboard");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        prop.alert("success","closed extra spaces");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle');

        if(toogle.textContent === "Speak"){
            toogle.innerHTML = "Stop";
        }else{
            toogle.innerHTML = "Speak";
            if(toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
      }
    
    return (
        <>
    <div style = { {color : prop.mode === "dark" ? "white" : "black"}}>
        <h1 >{prop.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} id="myBox" style = {{backgroundColor : prop.mode === "dark" ? "black" : "white", color :  prop.mode === "dark" ? "white" : "black"}} onChange = {handleOnChange} rows="8"></textarea>
        </div>
        <button className = "btn btn-primary mx-1" onClick = {handleUpClick} >Convert to uppercase</button>
        <button className = "btn btn-primary mx-1" onClick = {handleLoClick} >Convert to uppercase</button>
        <button className = "btn btn-primary mx-1" onClick = {handleToClear} >Clear Text</button>
        <button className = "btn btn-primary mx-1" onClick = {handleToCopy} >Copy Text</button>
        <button className = "btn btn-primary mx-1" onClick = {handleExtraSpaces} >remove extra space</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2"  id="toggle">Speak</button>
    </div>

    <div className = "container my-3" style = { {color : prop.mode === "dark" ? "white" : "black"}}>
        <h2>Your text summary </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "type something in textarea to preview here"}</p>
    </div>
  </>
  )
}
