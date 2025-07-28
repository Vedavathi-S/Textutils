import React,{useState} from 'react'



export default function Textform(props) {
    const [text, setText]=useState('Enter text here');
    const handleUpClick=()=>{
        // console.log('uppercase was clicked'+text);
        let newtxt=text.toUpperCase();
        setText(newtxt)
    }
    const handleOnChange=(event)=>{
        // console.log('onChange is pressed');
        setText(event.target.value);
    }
  return (
    
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
        
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Uppercase</button>
    </div>
  )
}
