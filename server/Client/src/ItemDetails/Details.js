
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../redux/actions/productAction';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { LocalOffer as Badge } from '@mui/icons-material';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { logincontext } from '../context/Context';
import Final1 from '../Components/Final1';
const useStyle = makeStyles({
    container: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    wrap: {
        margin: '0 80px',
        background: '#fff',
        display: 'flex'
    },
    left: {
        width: '64%',
        textAlign: 'center'
    },
    right: {
        width: '100%',
        marginTop: 30,
        paddingLeft: 20,
        position: 'static'
    },
    smalltext: {
        fontSize: 14
    },
    graytext: {
        color: '#878787'
    },
    logo: {
        height: 21,
        marginLeft: 11,
        position: 'relative',
        top: 5
    },
    rate: {
        color: '#fff',
        background: '#388e3c',
        borderRadius: '3px',
        paddingLeft: 2,
        marginRight: 8
    },
    cost: {
        fontSize: 28,
        fontWeight: 550,
    },
    mrp: {
        marginLeft: 9,
        position: 'relative',
        bottom: 2,
        marginRight: 9,
        fontSize: 16,
        textDecoration: 'line-through'
    },
    discount: {
        fontWeight: 600,
        color: '#388e3c',
        textDecoration: 'none'


    },
    offer: {
        fontSize: 18,
        fontWeight: 600
    },
    badge: {
        color: '#26a541',
        position: 'relative',
        top: 4,
    },
    text: {
        marginLeft: 8,
        fontSize: 14
    },
    cont: {
        display: 'flex'
    },
    head: {

    },
    sub: {
        padding: '22px 0px',
        paddingRight: '20px',
        color: '#878787',
        fontWeight: 600
    },
    sub1: {
        padding: '22px 0px',
        paddingLeft: '57px',
        fontSize: 14
    },
    sub2: {
        padding: '5px 0px'
    },
    super: {
        padding: '2px 0 0',
        width: '50%'
    },
    desc: {
        display: 'flex',
    },
    Add: {
        background: '#ff9f00',
        width: '47%',
        height: '50px',
        borderRadius: '0px',
        color: '#fff'
    },
    but: {
        margin: '18px',
        padding: 10,
        width: '68%',
        height: '32%'
    }
})

export default function Details({ }) {
    const { account, setAccount } = useContext(logincontext)
    const { cart, setCart } = useContext(logincontext)
    const navigate = useNavigate();
    const url = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const url1 = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const classes = useStyle();
    const { product } = useSelector(state => state.getProductDetails)
    const { id } = useParams();
   let a=0
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch])//eslint-disable-line react-hooks/exhaustive-deps
    const addtocart = async (p, u, c, m, url, discount, tit) => {
        await axios.post('http://localhost:8000/addcart', {
            data: {
                pid: p,
                uid: u,
                price: c,
                mrp: m,
                url: url,
                discount: discount,
                title: tit
            }
        })
            .then(res =>setCart(res.data))
        navigate(`/getallcart/${u}`)
    }
    const buy = async (uid,lt,url,cost, mrp, discount) => {
        navigate(`/final1/${product[0].id}`)
    }
    const get=(u)=>{
        navigate(`/getallcart/${u}`)
    }
    return (
        <>
       
            <Box className={classes.container}>
                {product && product.length &&
                    <Box className={classes.wrap}>
                        <Box className={classes.left}>
                            <img src={product[0].url} className={classes.but}></img>
                            <Box >
                                {
                                    cart.length && cart.map((ele)=>{
                                        if(ele.pid===product[0].id)
                                        a=1
                                    })
                            
                                }
                                {
                                    
                                }
                                
                                {a==1?<Button onClick={(()=>get(account.uid))}  variant="contained" className={classes.Add} size='large'><ShoppingCartIcon />GO TO CART</Button>:<Button onClick={(() => addtocart(product[0].id, account.uid, product[0].price.cost, product[0].price.mrp, product[0].url, product[0].discount, product[0].title.longTitle))} variant="contained" className={classes.Add} size='large'><ShoppingCartIcon />ADD TO CART</Button>}
                                <Button onClick={(()=>buy(account.uid,product[0].title.longTitle,product[0].url,product[0].price.cost,product[0].price.mrp,product[0].price.discount))} variant="contained" className={classes.Add} style={{ margin: 12, background: '#fb641b' }} size='large'><FlashOnIcon />BUY NOW</Button>
                            </Box>
                        </Box>
                        <Box className={classes.right}>
                            <p style={{ fontSize: 18 }}>{product[0].title.longTitle}</p>
                            <p className={clsx(classes.graytext, classes.smalltext)}>
                                <span className={classes.rate}> 4.3 <StarIcon style={{ height: 10, width: 16 }} /></span>
                                2000 Ratings & 1233 Reviews
                                <img src={url} className={classes.logo}></img>
                            </p>
                            <Box style={{ marginLeft: -7 }}>
                                <span className={classes.cost}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3 }} />{product[0].price.cost}</span>
                                <span className={classes.mrp}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3, fontSize: 16 }}></CurrencyRupeeIcon>{product[0].price.mrp}</span>
                                <span className={clsx(classes.mrp, classes.discount)}>{product[0].price.discount} off</span>
                            </Box>
                            <Box style={{ marginTop: 9 }}>
                                <p className={classes.offer}>Available Offers</p>
                                <Box>
                                    <p><Badge className={classes.badge} style={{ width: 18, height: 18 }} /><span className={classes.text}>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span></p>
                                    <p><Badge className={classes.badge} style={{ width: 18, height: 18 }} /><span className={classes.text}>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</span></p>
                                    <p><Badge className={classes.badge} style={{ width: 18, height: 18 }} /><span className={classes.text}>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span></p>
                                    <p><Badge className={classes.badge} style={{ width: 18, height: 18 }} /><span className={classes.text}>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</span></p>
                                    <p><Badge className={classes.badge} style={{ width: 18, height: 18 }} /><span className={classes.text}>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</span></p>
                                </Box>
                            </Box>
                            <Box className={classes.cont}>
                                <Box className={classes.head}>
                                    <Box className={classes.sub}>Delivary</Box>
                                    <Box className={classes.sub}>Warranty</Box>
                                    <Box className={classes.sub}>Seller</Box>
                                </Box>
                                <Box>
                                    <Box className={classes.sub1}>Delivery by Thu Mar 31 2022 | ₹40</Box>
                                    <Box className={classes.sub1}>No Warranty</Box>
                                    <Box className={classes.sub1}>
                                        <Typography className={classes.sub2} style={{ color: '#2874f0' }}>SuperComNet</Typography>
                                        <Typography className={classes.sub2}>GST invoice available</Typography>
                                        <Typography className={classes.sub2}>View more sellers starting from ₹329</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box >
                                <img src={url1} className={classes.super}></img>
                            </Box>
                            <Box className={classes.desc}>
                                <Typography className={classes.sub} style={{ fontWeight: '600' }}>Description</Typography>
                                <Typography className={classes.sub1} style={{ fontSize: '14px' }}>{product[0].description}</Typography>
                            </Box>
                        </Box>
                    </Box>
                }
            </Box>
        </>
    )
}
