// All Imports ----------------------------------------------------------
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useTheme, useMediaQuery, Menu, MenuItem , Link, Stack} from '@mui/material';
import Textfield from '../../../utils/Textfield';
import CssBaseline from '@mui/material/CssBaseline';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './logo.png';
import { alpha, styled } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

//-----------------------------------------------------------------------------

// Adding style components - buttons

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  
}));

const Title = styled(Typography)({
  fontSize : 30,
  fontWeight: 2500,
  background: "linear-gradient(90deg, rgba(255,46,0,1) 0%, rgba(252,176,69,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
});

const StyledSubmitButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(255,46,0,1) 0%, rgba(252,176,69,1) 100%)",
  border: 0,
  borderRadius: 4,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
});

const phoneRegExp=/^[7-9][0-9]{9}$/

export default function NavBar(props) 
{

  const data = props.data;
  const cid = props.cid;

  const [error, setError] = React.useState("");


  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);
  

  return (
    <React.Fragment>

      
      
      <Box sx={{ flexGrow: 1 }}>

        <RootStyle elevation ={0} color= "inherit"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar  sx={{ borderBottom : 1, borderColor: 'grey.400' }}>
          
            <Link underline="none" href="/buy">
              <img style = {{ width :32, height :32, margin : 4}} alt = "logo" src = {Logo} />
            </Link>
          
            <Box sx={{ flexGrow: 1 , pt : 1 }}>
              <Title as={Link}underline="none" href="/buy" variant="h5" >
           
                  ShopEasy
            
              </Title>
            </Box>


              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'right',
                  width: 'fit-content',
                  edge: 'right'
                }}
              >
               
               {cid ? <>
               
                <Button color="primary" onClick={() => {localStorage.removeItem("authToken"); history.push("/")}}>
                    Logout
                  </Button>
               
               </>
               
              
              : <>
                 
                 <Button color="primary" component={Link} href="/login">
                    Login
                  </Button>
          
                  <Button color="primary" variant = "outlined" component={Link} href="/register" >Signup</Button>
              </>}

              </Box>  
        
          </Toolbar>
        </RootStyle>
        <Toolbar/>
    
      </Box>

    </React.Fragment>
  );

}


