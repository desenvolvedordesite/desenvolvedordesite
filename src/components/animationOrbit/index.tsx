import React from 'react';
import './orbit.scss';

import { Grid, } from '@mui/material';
import { makeStyles } from '@mui/styles';


const Orbit: React.FC = () => {
  // const classes = useStyles();

  return (
    <Grid container justifyContent={"center"} sx={{border: "0px solid purple"}} >
    <div className="orbit">
      
      <ul className="orbit-wrap">
         
         <li className="orbit-center">
            <i className="orbit-center__icon fa fa-code"></i>
         </li>
  
         <li>
            <ul className="ring-0">
            <li><i className="orbit-icon fa fa-git"></i></li>
            <li><i className="orbit-icon fa fa-free-code-camp"></i></li>
            <li><i className="orbit-icon fa fa-meetup"></i></li>
            <li><i className="orbit-icon fa fa-codepen"></i></li>
            </ul>
         </li>
  
         <li>
            <ul className="ring-1">
            <li><i className="orbit-icon fa fa-podcast"></i></li>
            <li><i className="orbit-icon fa fa-css3"></i></li>
            <li><i className="orbit-icon fa fa-html5"></i></li>
            </ul>
         </li>
         <li>
            <ul className="ring-2">
            <li><i className="orbit-icon fa fa-windows"></i></li>
            <li><i className="orbit-icon fa fa-safari"></i></li>
            <li><i className="orbit-icon fa fa-edge"></i></li>
            <li><i className="orbit-icon fa fa-linux"></i></li>
            <li><i className="orbit-icon fa fa-apple"></i></li>
            <li><i className="orbit-icon fa fa-chrome"></i></li>
            <li><i className="orbit-icon fa fa-android"></i></li>
            <li><i className="orbit-icon fa fa-firefox"></i></li>
            </ul>
         </li>
         <li>
            <ul className="ring-3">
            <li><i className="orbit-icon fa fa-coffee"></i></li>
            <li><i className="orbit-icon fa fa-terminal"></i></li>
            <li><i className="orbit-icon fa fa-heart-o"></i></li>
            </ul>
         </li>
  
      </ul>
      
      </div>

    </Grid>

  );
};

export default Orbit;
