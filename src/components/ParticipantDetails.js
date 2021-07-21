import React, { Component } from "react";

function ParticipantDetails (props) {
  
    return (
      <div>
        <p>{props.details.firstName}</p>
        

         
      </div>
    );

  /*
  // Req to use this in other methods
  // Not Req if you convert fucntions into arrow functions
  constructor() {
    super();
    this.handleIncrement.bind(this);
  }
*/


}

export default ParticipantDetails;
