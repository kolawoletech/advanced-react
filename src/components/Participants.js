
import React, { Component } from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';
import ReactPaginate from 'react-paginate';
import ParticipantDetails from "./ParticipantDetails";
//const viewDetails = 
function Participants() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)


    const getData = async () => {
        const res = await axios.get(`https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants`)
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <ListItem key={pd.id} dense button>
            <ListItem>{pd.firstName}</ListItem>
            <ListItemText>{pd.jobTitle}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton
                    aria-label="Delete"
                    onClick={() => {
                        // viewDetails(pd.id);
                    }}>
                    <ParticipantDetails  details={pd}/>
                    <DetailsIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))



    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
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