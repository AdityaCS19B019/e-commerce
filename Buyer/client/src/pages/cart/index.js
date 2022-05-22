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
  import { useHistory } from 'react-router-dom'
 
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


const Product = ( props) => {

   const classes = useStyles();

    const [quantity, setQuantity] = React.useState('1');
    const [data, setData] = React.useState({})
    const [cid, setCid] = React.useState(0);
    const history = useHistory()

    const handleChange = async (event) => {
      setQuantity(event.target.value);
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const pid = data.pid;
      const qty = event.target.value;

      try 
    {
      const { data } = await axios.post(
        "/api/cart/updatequantity",
        { cid, pid, qty},
        config
      );

      console.log("result")
      console.log(data )
          
        if(data.success ){
          history.go(0)
          console.log("done")
        }

    }
    catch (error) 
    {

        console.log(error);

    }

    };

    const DeleteProduct = async () => {

      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const pid = data.pid;

      try 
    {
      const { data } = await axios.post(
        "/api/cart/deleteproduct",
        { cid, pid},
        config
      );
          
        if(data.success ){
          history.go(0)
        }

    }
    catch (error) 
    {
        console.log(error);
    }

    }

    React.useEffect(() => {

      setData(props.data) ;
      setCid(props.cid);
      setQuantity(props.data.qty)
      console.log(props.cid)

    },[])
    const perc = Math.floor(100 - (data.price/data.MRP) * 100)
    return(
        <Box sx={{p : 2,m : 1 ,backgroundColor : '#fff'}} >
        <Grid container>
            <Grid item xs={3} >
                <Paper variant='outlined' sx={{width: 250,height : 250, m:1}}>
                <img  className={classes.thumb} src={data.image1} alt=""/>
                </Paper>
            </Grid>
            <Grid item xs ={9}>
                <Typography>
                    <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                            {data.brand}
                    </Box>
                    <Box sx ={{  textAlign : 'left' , m: 1}}>
                           {data.name}
                    </Box>
                    <Stack direction="row"  sx ={{m :1}}>
                        <Typography variant = 'h5'>
                            {data.price}
                        </Typography>
                        <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                            {data.MRP}
                        </Typography>

                        <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                        {perc}% off
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

  const [products, setProducts] = React.useState([]);
  const [id, setid] = React.useState(0);
  const [fetching , setFetching] = React.useState(true)

  let t = 0

  const [total, setTotal] = React.useState(0);



  function getTotal(item, index){


    t =  t + item.price * item.qty
    // setTotal(total + item.price * item.qty)
    console.log("total" , t)


  }

  
  React.useEffect( async () => {
    if(!localStorage.getItem("authToken")){
        history.push('/')
    }

    const config = 
    {
      headers: 
      {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try 
    {
      const { data } = await axios.get("/api/private", config);
      if(data.success){
        setid(data.cid);

        console.log("hi")
        const cid = data.cid
        try 
        {
          const { data } = await axios.post(
            "/api/cart/getcart", 
            { cid },
            config
          );
              
          setProducts(data.result)

          data.result.forEach(getTotal);

          console.log(data.result)
          setTotal(t)
    
          setFetching(false)
    
  
        }
        catch (error) 
        {
    
            console.log(error);
            setFetching(false)
    
        }
      }
      else{ 
        setid(0)
        localStorage.removeItem("authToken");
        history.push("/");
        
      }
    } 
    catch (error) 
    {
      setid(0)
      localStorage.removeItem("authToken");
      history.push("/");
    }

    
  },[]);

  const classes = useStyles();

  const handleOrder = async () => {
    const config = 
    {
      headers: 
      {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    const cid = id;
    const orders  =  products;

    try 
        {
          const { data } = await axios.post(
            "/api/cart/placeOrder", 
            { cid , orders},
            config
          );
              
          console.log(data)
          if(data.success){
            window.location = "/placeorder/" + data.orderid;
          }
    
  
        }
        catch (error) 
        {
    
            console.log(error);
    
        }

  }



  return (
    <>
    {fetching ? <LinearProgress/> : 
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
                                        ₹{total}
                            </Typography>
                            
                            <PlaceOrder sx={{m :2 , ml : 3 }} onClick={handleOrder} size="small">Place Order</PlaceOrder>
                             </Stack>

                        </Box>
                    </Box>
                <Divider/>
                
                {products.map((product) => {
                  
                  return <Product  data={product}  cid = {id}/>
                })}
                

                <Divider/>
                    
                </Typography>
            </Box>

        </Box>
    </>
  }
  </>
  )
}

export default Cart