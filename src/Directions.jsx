import React, { Component } from 'react';

const Directions = ({ steps }) => {
  let newSteps = Array.prototype.slice.call(steps);

  return (
    <div className="container-directions">
      {newSteps.map((step, key)=>{
        return (
            <div 
              key={key}
              className="directions-item" 
              dangerouslySetInnerHTML={{ __html: step.instructions }} />
          )
      })}
    </div>
    );
}

export default Directions;