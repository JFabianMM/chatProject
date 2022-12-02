import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { InfoDialog } from './InfoDialog';

function handleClickUserCard(e) {
    console.log(e.target.parentNode.id);
    // return(
    //     <InfoDialog/>
    // )
};

export function UserCard(props){
    return (
            <ListItem id={props.index} button onClick={handleClickUserCard}>
                <ListItemIcon>
                    <Avatar id={props.index} alt={props.name} src={props.src} />
                </ListItemIcon>
                <ListItemText id={props.index} style={{color:'#FFFFFF'}} primary={props.name}></ListItemText>
                <ListItemText id={props.index} style={{color:'#FFFFFF'}} secondary="online" align="right"></ListItemText>
            </ListItem>
    )   
  }