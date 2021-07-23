
import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import ReactPaginate from 'react-paginate';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Participants() {
    const [offset, setOffset] = useState(0);

    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const [currentEmployee, setCurrentEmployee] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(-1);

    const getData = async () => {
        const res = await axios.get(`https://us-central1-veertly-dev-8b81f.cloudfunctions.net/fetchParticipants`)




        const postData = slice.map((participant, index) =>
            <List>
                <ListItem className="list-group">
                    <ListItemSecondaryAction
                        className={
                            "list-group-item " + (index === currentIndex ? "active" : "")
                        }
                        key={index}

                        onClick={() => setActiveEmployee(participant, index)}>

                        <ListItemText>{participant.firstName}</ListItemText>


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


    const setActiveEmployee = (employee, index) => {
        setCurrentEmployee(employee);
        setCurrentIndex(index);
    };




    useEffect(() => {
        getData()
    }, [offset]);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();
    return (
        <div>
            <div className="col-md-6">
                {currentEmployee ? (
                    <List>
                        <Card className={classes.root}>
                            <h4>Employee Details</h4>

                            <CardContent>

                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    <strong>FirstName: </strong>
                                    {currentEmployee.firstName}



                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    <strong>LastName: </strong>
                                    {currentEmployee.lastName}



                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>

                                    <strong>Company: </strong>
                                    {currentEmployee.company}



                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>

                                    <strong>Jobn Title: </strong>
                                    {currentEmployee.jobTitle}



                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>

                                    <strong>ID: </strong>
                                    {currentEmployee.id}


                                </Typography>

                            </CardContent>

                        </Card>



                    </List>
                ) : (
                    <div>
                        <br />
                        <p>Click on an Employee...</p>
                    </div>
                )}
            </div>
     
                <h4>Employee List</h4>
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
            </div>

       

    );
}

export default Participants;