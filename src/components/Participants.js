
import React, { Component } from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';
import ReactPaginate from 'react-paginate';
import ParticipantDetails from "./ParticipantDetails";
//import ParticipantDetails from "./ParticipantDetails";


function Participants() {
    const [offset, setOffset] = useState(0);
    const [details, showDetails] = useState(false);

    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const [currentEmployee, setCurrentEmployee] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(-1);

    const getData = async () => {
        const res = await axios.get(`https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants`)
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)

  
        
        const postData = slice.map((participant, index) => <List   className={
            "list-group-item " + (index === currentIndex ? "active" : "")
        } key={index} ><ListItem dense button>

        
            <ListItem>{participant.firstName}</ListItem>
            <ListItemText>{participant.jobTitle}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                  
                    onClick={() => {
                       // setActiveEmployee( participant.id);
                        handleDetailsClick(details);
                        setActiveEmployee(participant, participant.id);
                       
                    }}>
                     {currentEmployee ? ( <ParticipantDetails details={currentEmployee} employee={participant} />) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
                    
                    <DetailsIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
       </List>
        )
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))



    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const  handleDetailsClick = (e, details) => {
        console.log(details)
        showDetails(!details);
    
    };

    const setActiveEmployee = (employee, index) => {
        setCurrentEmployee(employee);
        setCurrentIndex(index);
    };
    

const Modal = ({ employee }) => (
    
    <div >
    <section className="modal-main">
      {employee}
     
    </section>
  </div>
);
const Modal2 = ({ handleClose, show, employee }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {employee}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    );
  };

    useEffect(() => {
        getData()
    }, [offset])

    return (
        <List>
            {data}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </List>
    );
}

export default Participants;