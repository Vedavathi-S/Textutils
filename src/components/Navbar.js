import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
   if (typeof props.title !== 'string') {
    console.error(`PropType Warning: Invalid prop 'title' of type '${typeof props.title}' supplied to 'Navbar', expected 'string'.`);
  }
  if (typeof props.aboutText !== 'string') {
    console.error(`PropType Warning: Invalid prop 'aboutText' of type '${typeof props.aboutText}' supplied to 'Navbar', expected 'string'.`);
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className="form-check form-switch  mx-3">
            <input className="form-check-input" type="checkbox" onClick={props.toggleSmode} role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Green Mode</label>
          </div>
          <div className={`form-check form-switch `}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
          </div>
        
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={title:PropTypes.string.isRequired,
                aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:'set title here',
  aboutText:'about text here'
};

export default Navbar;

