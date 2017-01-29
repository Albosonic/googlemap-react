import React from 'react';

const Form = ({ handleRoute }) => {
  return(
    <div className="container-form">
      <form className="map-form" onSubmit={ (e)=>{ handleRoute(e) } }>
        <input className="map-input" type="text" placeholder="origin"/>
        <input className="map-input" type="text" placeholder="destination"/>
        <button 
          className="map-directions-button"
          type="submit">
          directions
          </button>
      </form>              

    </div>
    )
}

export default Form;