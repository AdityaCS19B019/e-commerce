import React from 'react'
import Typography from '@mui/material/Typography';
import { Box,Chip,Divider,Paper,Stack , Slider, Grid, Button, LinearProgress} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green, grey, orange, yellow } from '@mui/material/colors';
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
  import { styled } from '@mui/material/styles';

  import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

  const useStyles = makeStyles({
    card: {
       transition : "0.6s",
      '&:hover': {
        transform: "scale3d(1.05, 1.05, 1)"
        }
    },

    thumb : {
        width: "100%",
        height: "100%",
        maxHeight: 200,
        display: "block",
        objectFit: "contain"
    }
  });

const PlaceOrder = styled(Button)(({ theme }) => ({
    
    backgroundColor: '#fb641b',
    height : 35,
    marginTop : 5,
    color : '#fff',
    '&:hover': {
      backgroundColor: '#f96c28',
    },
  }));

const DeleteButton = styled(Button)(({ theme }) => ({
    
    color: '#818281',
    '&:hover': {
      color: '#c7c7c7',
      backgroundColor : "#fff"
    },
  }));


const Product = (props) => {

   const classes = useStyles();

    const [quantity, setQuantity] = React.useState('1');

    const handleChange = (event) => {
      setQuantity(event.target.value);
    };

    const DeleteProduct = () => {

    }

    const data = props.data ;
    return(
        <Box sx={{p : 2,m : 1 ,backgroundColor : '#fff'}} >
        <Grid container>
            <Grid item xs={3} >
                <Paper variant='outlined' sx={{width: 250,height : 250, m:1}}>
                <img  className={classes.thumb} src="https://m.media-amazon.com/images/I/91FvDEE9sCL._AC_AA360_.jpg" alt=""/>
                </Paper>
            </Grid>
            <Grid item xs ={9}>
                <Typography>
                    <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                            "Brand"
                    </Box>
                    <Box sx ={{  textAlign : 'left' , m: 1}}>
                           "Name"
                    </Box>
                    <Stack direction="row"  sx ={{m :1}}>
                        <Typography variant = 'h5'>
                            ₹222
                        </Typography>
                        <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                            ₹555
                        </Typography>

                        <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                            30% off
                        </Typography>

                    </Stack>

                    <FormControl sx={{minWidth : 100, mt : 2}} >
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={quantity}
                        label="Quantity"
                        size="small"
                        onChange={handleChange}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>


                </Typography>

                <DeleteButton onClick={DeleteProduct} sx={{ mt :2}}variant="text">Delete</DeleteButton>

            </Grid>
        </Grid>
    </Box>
    )
} 

const Cart = ({history}) => {

  React.useEffect(() => {
    if(!localStorage.getItem("authToken")){
        history.push('/')
    }
  });

  const classes = useStyles();



  return (
    <>
        <Box >

            <Box sx={{ height : '100%', p : 2,m : 1 ,backgroundColor : grey[200]}}>
                <Typography component="div">
                    <Box sx={{display : "flex"}}>
                         <Box sx={{ fontSize: 'h6.fontSize', m: 1 , flex : 'auto'}}>Your Bag </Box>
                         <Box>
                             <Stack direction="row" spacing={1}>
                             <Box sx={{ fontSize: 'h6.fontSize', m: 1 , flex : 'auto'}}>Bag Total :  </Box>
                            <Typography sx={{  pt: 1 , flex : 'auto'}} variant = 'h5'>
                                        ₹556
                            </Typography>
                            
                            <PlaceOrder sx={{m :2 , ml : 3 }} size="small">Place Order</PlaceOrder>
                             </Stack>

                        </Box>
                    </Box>
                <Divider/>
               <Product />
               <Product />
               <Product/>

                <Divider/>
                    
                </Typography>
            </Box>

        </Box>
    </>
  )
}

export default Cart