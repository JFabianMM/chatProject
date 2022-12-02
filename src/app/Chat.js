import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import { color } from '@mui/system';
import { UserCard } from './UserCard'
import { MessageCard } from './MessageCard';
import { MenuBar } from './MenuBar'
import { InputSearch } from './InputSearch' 
import { InputMessage } from './InputMessage' 
import Button from '@mui/material/Button';


export function Chat () {

    let users=[
     {
        _id:"11",
       name:"Ailyn Mendoza",
       src:"https://material-ui.com/static/images/avatar/3.jpg"
     },
     {
        _id:"12",
        name:"Guillermo Jimenez",
        src:"https://material-ui.com/static/images/avatar/2.jpg"
      },
      {
        _id:"13",
        name:"Alffredo Mendoza",
        src:"https://material-ui.com/static/images/avatar/4.jpg"
      },
      {
        _id:"14",
        name:"Alma Belia Montoya",
        src:"https://material-ui.com/static/images/avatar/5.jpg"
      },
      {
        _id:"15",
        name:"Jose Maria Mendoza",
        src:"https://material-ui.com/static/images/avatar/6.jpg"
      },
      {
        _id:"16",
        name:"Alejandra Felix",
        src:"https://material-ui.com/static/images/avatar/7.jpg"
      },
      {
        _id:"17",
         name:"Guillermo Jimenez Dos",
         src:"https://material-ui.com/static/images/avatar/1.jpg"
       },
       {
        _id:"18",
         name:"Alffredo Mendoza Dos",
         src:"https://material-ui.com/static/images/avatar/2.jpg"
       },
       {
        _id:"19",
         name:"Alma Belia Montoya Dos",
         src:"https://material-ui.com/static/images/avatar/3.jpg"
       },
       {
        _id:"110",
         name:"Jose Maria Mendoza dos",
         src:"https://material-ui.com/static/images/avatar/4.jpg"
       },
       {
        _id:"111",
         name:"Alejandra Felix Seares",
         src:"https://material-ui.com/static/images/avatar/5.jpg"
       }
    ];

let messages=[
        {
            _id:"1",
            position:"right",
            message:"Hola como estas?",
            time:"9:30"
        },
        {
            _id:"2",
            position:"left",
            message:"Bien, y tu que tal?",
            time:"9:31"
        },
        {
            _id:"3",
            position:"right",
            message:"Pos aqui chambiandole",
            time:"9:32"
        },
        {
            _id:"4",
            position:"left",
            message:"Que bueno",
            time:"9:33"
        },
        {
            _id:"5",
            position:"right",
            message:"Nos vemos entonces",
            time:"9:35"
        },
        {
            _id:"6",
            position:"left",
            message:"Y eso?",
            time:"9:36"
        },
        {
            _id:"7",
            position:"right",
            message:"No lo se",
            time:"9:37"
        },
        {
            _id:"8",
            position:"left",
            message:"Pues entonces yo tambien",
            time:"9:38"
        },
        {
            _id:"9",
            position:"right",
            message:"Nos vemos entonces",
            time:"9:39"
        }
       ];

  return (
    <>
    <Grid container style={{backgroundColor:'#8dc6ff', width: '100%', height: '100 px', padding: ''}}>
        <MenuBar/>
    </Grid>

    <Grid container component={Paper} style={{width: '100%', height: '100%'}}>
        <Grid item xs={3} style={{backgroundColor:'#34495e', borderRight: '1px solid #e0e0e0'}}>
            <List>
                <UserCard name='Fabian Mendoza' src='https://material-ui.com/static/images/avatar/1.jpg'/>
            </List>
            <Divider sx={{ bgcolor: "secondary.light" }}/>
            <Grid item xs={12} style={{padding: '10px'}}>
                <InputSearch style={{background:'#34495e', color:'#FFFFFF'}} id="outlined-basic-email" fullWidth/>
            </Grid>
            <List style={{height: '80vh', overflowY: 'auto'}}>
                {
                    users.map((element) =>{
                        return (
                            <UserCard key={element._id} name={element.name} src={element.src} index={element._id}/>
                        );
                    })
                }
            </List>
        </Grid>

        <Grid item xs={9}>
            <List style={{height: '80vh', overflowY: 'auto'}}>
            {
                messages.map((element) =>{
                    return (
                        <MessageCard key={element._id} position={element.position} message={element.message} time={element.time} index={element._id} />                    
                        
                    );
                })
            }
            </List>
            
            <Divider />

            <Grid item xs={12} container style={{backgroundColor:'#f4f7f7', height: '70px'}}>
                <Grid item xs={12} style={{padding: '10px'}}>
                    <InputMessage style={{background:'#34495e', color:'#FFFFFF'}} id="outlined-basic-email" fullWidth/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </>
  );
}

            

            
            

