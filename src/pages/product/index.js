import React from 'react'
import './index.css'
import { Container, Grid, Box ,Typography, Button, Stack, Chip, Divider} from '@mui/material';
import { styled } from '@mui/material/styles';
import { green, grey, orange, yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';

const CartButton = styled(Button)(({ theme }) => ({
    
    backgroundColor: '#ff9f00',
    '&:hover': {
      backgroundColor: '#ffa40d',
    },
  }));


const BuyButton = styled(Button)(({ theme }) => ({
    
    backgroundColor: '#fb641b',
    '&:hover': {
      backgroundColor: '#f96c28',
    },
  }));

  const ProductDetails = [
    {
        label : "Water Resistant",
        Description : "Yes"
    },
    {
        label : "Display Type",
        Description : "Analog"
    },
    {
        label : "Style Code",
        Description : "CH2601"
    },
    {
        label : "Series",
        Description : "DECKER"
    },
    {
        label : "Occasion",
        Description : "Casual"
    },
    {
        label : "Watch Type",
        Description : " Thick Straps, Metallic"
    },
    {
        label : "Pack of",
        Description : "1"
    },
    {
        label : "Sales Package",
        Description : "1"
    },
    {
        label : "Shock Resistance",
        Description : "No"
    },
    {
        label : "Scratch Resistant",
        Description : "No"
    },
    {
        label : "Mechanism",      
        Description : "Quartz"
    },
    {
        label : "Strap Color",
        Description : "Black"
    },
    {
        label : "Strap Material",
        Description : " STAINLESS STEEL Strap"
    },
    {
        label : "Strap Type",
        Description : "BRACELET"
    },
    {
        label : "Power Source",
        Description : "Battery"
    },
    {
        label : "Dial Color",
        Description : "Black"
    },
    {
        label : "Width",
        Description : "22 mm"
    },
    {
        label : "Diameter",
        Description : "44mm"
    },
    {
        label : "Domestic Warranty",
        Description : "2 years"
    },
    {
        label : "Warranty Service Type",
        Description : "2"
    },
    {
        label : "Warranty Period",
        Description : "2 Years"
    }
    
];


const Product = () => {

    const product = {
        "_id": "1",
        "title": "Printed Kurta, Trouser/Pant & Dupatta Set",
        "src": [
            "https://rukminim1.flixcart.com/image/714/857/ku79vgw0/watch/a/g/j/ch2601-fossil-men-original-imaff62hurpdhhha.jpeg?q=50",
            "https://rukminim1.flixcart.com/image/714/857/ku79vgw0/watch/n/0/z/ch2601-fossil-men-original-imaff62hpqcqvjga.jpeg?q=50",
            "https://rukminim1.flixcart.com/image/714/857/ku79vgw0/watch/k/v/j/ch2601-fossil-men-original-imaff62hgwry6esm.jpeg?q=50",
            "https://rukminim1.flixcart.com/image/714/857/ku79vgw0/watch/d/2/7/ch2601-fossil-men-original-imag7cvanzcpgdff.jpeg?q=50",
            "https://rukminim1.flixcart.com/image/714/857/l01blow0/watch/y/y/o/-original-imagbwyxvmztyzzr.jpeg?q=50"
         
        ],
        "description": "Trouser/Pant & Dupatta Set",
        "content": "",
        "price": 230,
    };

    const [index, setIndex] = React.useState(0)

    const myRef = React.createRef();

    const handleTab = (index) =>{
        setIndex(index)
        const images = myRef.current.children;
        for(let i=0; i<images.length; i++){
          images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    React.useEffect(() => {
        myRef.current.children[index].className = "active";
    });




    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} md ={6} sx={{p : 2}} >
                        <Box >
                        <div className="big-img">
                            <img src={product.src[index]} alt=""/>
                        </div>
    
                        <div className="thumb" ref={myRef}>
                            {
                                product.src.map((img, index) =>(
                                <img src={img} alt="" key={index} 
                                onClick={() => handleTab(index)}
                                />
                            ))
                            }
                        </div>

                        <Box sx={{display : "flex", mt : -5, justifyContent : "center" }}>
                            <Stack direction="row" spacing={2}>
                                <CartButton variant="contained" sx={{color : 'white' }} startIcon ={<ShoppingCartIcon/>}>
                                    ADD TO CART
                                </CartButton>
                                <BuyButton variant="contained" sx={{color : 'white'}}  startIcon ={<BoltIcon />}>
                                    BUY NOW
                                </BuyButton>
                            </Stack>
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md ={6}  >
                        <Typography component="div">
                                <Box color={grey[500]} sx ={{  textAlign : 'left', textTransform: 'uppercase' ,fontWeight: 'bold', m: 1}}>
                                    Fossil
                                </Box>
                                <Box sx ={{  textAlign : 'left' , m: 1}}>
                                    CH2601 DECKER Analog Watch - For Men
                                </Box>
                                <Stack direction="row"  sx ={{m :1}}>
                                    <Typography variant = 'h5'>
                                        ₹6,494
                                    </Typography>
                                    <Typography sx={{mt : 0.5, pl : 2, textDecoration :'line-through'}} color={grey[500]}>
                                        ₹11,995
                                    </Typography>

                                    <Typography sx={{mt : 0.5, pl : 2 }} color={green[600]}>
                                        42% off
                                    </Typography>

                                </Stack>

                                <Stack direction= "row" sx={{m:1}}>
                                    <Chip  label="4.3" color="success" size="small" icon={<StarIcon />}/>
                                    <Typography sx={{ pl : 1}} color={grey[500]}>
                                        8,111 ratings
                                    </Typography>
                                </Stack>

                                <Divider sx={{m : 1}}/>

                                <Box sx ={{ textAlign : 'left' , m: 1}}>
                                    <Typography variant = 'h6'>
                                        Product Description
                                    </Typography>
                                </Box>

                                <Box sx ={{  textAlign : 'left' , m: 1}}>
                                    <Typography variant='body2'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Typography>
                                </Box>

                                <Divider sx={{m : 1}}/>

                                <Box sx ={{ textAlign : 'left' , m: 1}}>
                                    <Typography variant = 'h6'>
                                        Product Details
                                    </Typography>
                                </Box>

                                {ProductDetails.map((detail) => { return(
                                    <Grid container  sx ={{m :1}}>
                                        <Grid item  xs={4}>
                                            <Box sx={{ fontWeight: 'bold'}} >
                                                <Typography variant = '' color={grey[400]} >
                                                    {detail.label}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item  xs={8}>
                                            <Typography variant='body2'>
                                                {detail.Description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )})}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Product