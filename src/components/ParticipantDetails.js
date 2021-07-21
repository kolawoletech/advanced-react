import React, { Component } from "react";
import { useState, useEffect } from 'react';


const ParticipantDetails = (props) => {
    const [visible, setVisible ] = useState(false)

    const initialEmployeeState = {
        id: null,
        title: "",
        description: "",
        published: false
      };

    function openModal(){
        setVisible(props.details)
    }


  function closeModal(){
    setVisible(false)
  }
    return (
      <div>
        <p>{props.employee.firstName}</p>§
        <button > Dismiss</button>
        

         
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
