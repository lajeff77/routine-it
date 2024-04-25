import React, {useEffect, useState} from "react";
import {Box, Divider, IconButton, List, ListItem, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({props}) => {

    const handleRemove = (indexToRemove) => {
        props.setList(list => list.filter((_, index) => index !== indexToRemove));
    };

    return(
        <Box>
            <List>
                {props.list.map((task, index) => {
                    return(<Box key={index} sx={{width: "100%"}}>
                        <Divider/>
                        <ListItem >
                            <Typography variant="body1">{task}</Typography>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleRemove(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem> 
                    </Box>)
                })}
            </List>
        </Box>
    )
}

export default TaskList;