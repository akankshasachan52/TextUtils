import React from 'react'
import '../App.css';


export default function Navbar(props) {

  return (  
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <a className="navbar-brand" to="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      
    </ul>
    
   
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{ paddingLeft: '85.0em' }}>

  <input className="form-check-input" type="checkbox" role="switch"   aria-checked="true"id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
   </div>
  </div>
  </div>
</nav>
    
  )
}
