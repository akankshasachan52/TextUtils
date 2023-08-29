import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    
    const [text,setText]=useState('');

    const handleUpperCaseClick=()=>{
       
        if(text.length<=0||text.length ===undefined){
            props.showAlert("Please enter text  ","danger")
        }else{
            setText(text.toUpperCase()) ;
            props.showAlert("Converted to Uppercase","success")
        }
          
     }

     const handleLowerCaseClick=()=>{
        if(text.length<=0||text.length ===undefined){
            props.showAlert("Please enter text  ","danger")
        }else{
          setText(text.toLowerCase()) ;
          props.showAlert("Converted to lowercase","success")
        }
     }


     const handleClearTextClick=()=>{       
        if(text.length<=0||text.length ===undefined){
            props.showAlert("Please enter text  ","danger")
        }else{
          setText('') ;
          props.showAlert("Text cleared","success")
        }
     }


     const handleCopyText=()=>{       
        var text=document.getElementById("myBox");
       alert(text.length)
       if(text.length<=0 ||text.length ===undefined){
        props.showAlert("Please enter text  ","danger")
    }else{

       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("copied to clipboard !","success")
    }
   }

   const handleExtraSpace=()=>{ 
    if(text.length<=0||text.length ===undefined){
        props.showAlert("Please enter text  ","danger")
    }else{      
            var newText= text.split(/[ ]+/)
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed","success")
    }
}

     const convertToAlternateText =()=>{  
        if(text.length<=0||text.length ===undefined){
            props.showAlert("Please enter text  ","danger")
        }else{
        let newText ='';
       for (let i = 0; i < text.length; i++) {
           if(i%2===0){
            newText+=text[i].toLowerCase();
           }else{
            newText+=text[i].toUpperCase();
           }
           
        }     
        setText(newText);    
        props.showAlert("Converted to alternate text","success")
    }
 }
     

 const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML === "Speak"){
            window.speechSynthesis.cancel()
        }
    }

}
     const handleonchange=(event)=>{               
        setText(event.target.value)    
     }
     
  return (
    <>
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
 <h1>{props.heading}</h1>
  <div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.placeholder}</label>
  <textarea  className="form-control" value={text} onChange={handleonchange} id="myBox" rows="12" placeholder="enter text here"  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
  </div>
   <button className='btn btn-primary mx-1' onClick={handleUpperCaseClick}>Convert to Uppercase</button>
   <button className='btn btn-success mx-1' onClick={handleLowerCaseClick}>Convert to Lowercase</button>
   <button className='btn btn-secondary mx-1' onClick={handleClearTextClick}>Clear Text</button>
   <button className='btn btn-danger mx-1' onClick={convertToAlternateText }> aLtErNaTe TeXt</button>  
   <button className='btn btn-warning mx-1' onClick={handleCopyText}> Copy Text</button>  
   <button className='btn btn-info mx-1' onClick={handleExtraSpace}> Remove Extra Spaces</button>  
   <button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2" id="toggle">Speak</button>

   <div className="container my-3">
<h2>Your text summary</h2>
<p>{ text.length===0 ?0 : text.split(" ").length} Word and {text.length} characters !!!</p>
<p>{text.length>0?0.008*text.split(" ").length:0} Minute read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in text box above to preview it here."}</p>
</div>
 </div>
 </>
   
  )
}
