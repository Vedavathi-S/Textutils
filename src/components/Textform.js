import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText]=useState('');
    const handleUpClick=()=>{
        // console.log('uppercase was clicked'+text);
        let newtxt=text.toUpperCase();
        setText(newtxt);
    }
    const handlelowClick=()=>{
      let newtxt=text.toLowerCase();
      setText(newtxt);
    }
    const handleclear=()=>{
      let newtxt=" "
      setText(newtxt);
    }
    const handleclearExtra=()=>{
      let netxt=text.split(/[ ]+/);
      setText(netxt.join(" "));
    }
    const handleSpeak=()=>{
      window.speechSynthesis.cancel();
      let msg=new SpeechSynthesisUtterance(text);
      //msg.text=text;
      window.speechSynthesis.speak(msg);
    }
    const handleOnChange=(event)=>{
        // console.log('onChange is pressed');
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'black'}} >
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
        
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>ClearText</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleSpeak}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleclearExtra}>Clear Extra Space</button>
    </div>
    <div className="container my-3" >
    <h2>Text Summary</h2>
    <p>{text.split(" ").length } words, {text.length} characters</p>
    <p>{0.08*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Write something to preview'}</p>

    </div>
    </>
  )
}
