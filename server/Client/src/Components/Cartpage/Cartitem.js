import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import { useContext } from 'react';
import { logincontext } from '../../context/Context';
import { Box, display, height, margin } from '@mui/system';
import { makeStyles, Typography } from '@material-ui/core';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@material-ui/core';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { SettingsApplicationsRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const useStyle = makeStyles({
  maincont: {
    background: '#F2F2F2',
    width: '80%',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    top: '26px'
  },
  left:
  {
    width: '70%',
    margin: '4px',
    boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)',
    padding: '10px',
    height:'13%'
  },
  right: {
    width: '79%',
    margin: '6px',
    boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)',
    height: '345px'
  },
  leftin: {
    padding: '24px',
    boxShadow: '0px 1px 1px 0 rgb(0 0 0/20%)'
  },
  img: {
    height: '112px',
    width: '112px',
    display:'inline'
  },
  text: {
    padding: '0px 24px 12px',
    fontSize: '16px'
  },
  logo: {
    height: 15,
    marginLeft: 11,
    position: 'relative',
    top: 3
  },
  textpart: {
    padding: '0px 12px',
    display:'inline'
  },
  mrp: {
    marginLeft: 9,
    position: 'relative',
    bottom: 2,
    marginRight: 9,
    fontSize: 14,
    textDecoration: 'line-through'
  },
  cost: {
    fontSize: 18,
    fontWeight: 550,
    bottom: '2px'
  },
  discount: {
    fontWeight: 600,
    color: '#388e3c',
    textDecoration: 'none',
    fontSize: 14


  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '35px 7px',
    fontSize: '16px',
  },
  price1: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: '600',

  },

  auth1: {
    margin: '45px 8px',
    padding: '10px',
    display: 'flex',

  },
  Add: {
    background: '#ff9f00',
    width: '30%',
    height: '50px',
    borderRadius: '0px',
    color: '#fff',
    position:'sticky'
  },
bt:{
  borderRadius:'15px',
  border:'1px solid black',
  margin:'5px',
  cursor:'pointer'
},
empty:{
  width:'85%',
  margin:'auto',
  background:'#fff',
  height:'470px',
  boxShadow: '0 5px 8px 0 rgb(0,0,0,0.2)',
  position:'relative',
  top:'12px'
},
Add:{
  background:'#2874f0',
        height:'50px',
        borderRadius:'0px',
        color:'#fff',
        boxShadow:'none',
},
imgtext:{
  display:'flex'
}
})
export default function Cartitem({ }) {
  const navigate=useNavigate();
  const { id } = useParams();
  const{details,setDetails}=useContext(logincontext);
  const{account,setAccount}=useContext(logincontext)
  const classes = useStyle();
  const url1 = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const url2 = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg'
  const url3='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'
  let pr = 0
  let mrp = 0
  let k;
  for (let index = 0; index < details.length; index++) {
    pr = pr + (details[index].price*details[index].qnt);
    mrp = mrp + (details[index].mrp*details[index].qnt);
  }
  k = mrp - pr
  const inc=(pid)=>{
    setDetails(details=>
      details.map((item)=>
      pid===item.pid?{...item,qnt:item.qnt+1}:item
      )
      )
  }
  const dec=(pid)=>{
    setDetails(details=>
      details.map((item)=>
      pid===item.pid?{...item,qnt:item.qnt-1}:item
      )
      )
  }
  const final1=()=>{
    navigate('/final')
  }
  const delete1=async (id,uid)=>{
    await axios.post('/deletecart',{id,uid})
    .then(res=>setDetails(res.data)
    )
  }
  useEffect(() => {
    axios.get(`/getallcart/${id}`)
      .then(res => setDetails(res.data))
  }, [])

  return (

    <>
      {
       details.length?
      <Box className={classes.maincont}>
        <Box className={classes.left}>
          <Box style={{ fontSize: '19px', fontWeight: '600', background: '#f0f0f0' }}>My Cart({details.length})</Box>
          {
            details && details.length &&
            details.map((ele) => (
              <Box className={classes.leftin} style={{height:'16%',padding:'12px'}}>
                <Box className={classes.imgtext}>
                <img src={ele.url} className={classes.img}></img>
                <Box style={{padding:'0px 24px 12px'}}>
                <Typography style={{ marginLeft: '0px',fontSize:'14px',marginBottom:'18px'}}>{ele.title}</Typography>
                <Typography style={{ marginLeft: '0px',fontSize:'14px',marginBottom:'18px',color:'#878787' }}>Seller:Inline Creation<img src={url1} className={classes.logo}></img></Typography>
                <Typography className={classes.cost} style={{display:'inline'}}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3, height: 18 }} />{ele.price*ele.qnt}</Typography><Typography style={{display:'inline'}} className={classes.mrp}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3, fontSize: 16 }}></CurrencyRupeeIcon>{ele.mrp*ele.qnt}</Typography><Typography style={{display:'inline'}} className={clsx(classes.mrp, classes.discount)}>{ele.discount} off</Typography>
                </Box>
                </Box>
                  <Box style={{textAlign:'left'}}>
                  <span style={{textAlign:'center',margin:'8px'}}>
                  <button className={classes.bt} onClick={()=>dec(ele.pid)}>-</button>
                  <input type='text' placeholder={ele.qnt} style={{width:'7%',textAlign:'center'}}></input>
                  <button className={classes.bt} onClick={()=>inc(ele.pid)}>+</button></span>
                  <p onClick={()=>delete1(ele._id,ele.uid)} style={{fontSize:'16px',fontWeight:'600',cursor:'pointer',display:'inline'}}>REMOVE</p>
                  </Box>
              </Box>
                
            ))
          }
          <Box style={{textAlign:'right',position:'sticky',bottom:'0px',background:'#fff',boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)'}}>
            <Button variant="contained" onClick={(()=>final1())} className={classes.Add} style={{ margin: 12, background: '#fb641b',fontWeight:'600',width:'25%' }} size='large'>PLACE ORDER</Button>
          </Box>
        </Box>
        <Box className={classes.auth}>
          <Box className={classes.right} style={{ padding: '0px 28px' }}>
            <Box style={{ position: 'relative', top: '10px', borderBottom: '1px solid rgb(223,220,220)', fontSize: '18px', color: '#878787', fontWeight: '600' }}>PRICE DETAILS</Box>
            <Box className={classes.price}>
              <Box>Price ({details.length} items)</Box>
              <Box style={{ fontSize: '18px' }}><CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{mrp}</Box>
            </Box>
            <Box className={classes.price}>
              <Box >Discount</Box>
              <Box style={{ color: '#388e3c', fontSize: '18px' }}>-<CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{k}</Box>
            </Box>
            <Box className={classes.price} style={{ borderBottom: '1px dotted grey' }}>
              <Box>Delivary Charges</Box>
              <Box style={{ color: '#388e3c', fontSize: '18px' }}>FREE</Box>
            </Box>
            <Box className={classes.price1} style={{ borderBottom: '1px dotted grey' }}>
              <Box>Total Amount</Box>
              <Box style={{ fontSize: '18px' }}><CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{pr}</Box>
            </Box>
            <Box style={{ position: 'relative', top: '20px', padding: '5px 0px', color: '#388e3c', fontWeight: '600', fontSize: '16px' }}>You will save <CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />1345 on this order</Box>
          </Box>
          <Box className={classes.auth1}>
            <img src={url2}></img><Typography style={{ marginLeft: '12px', color: '#878787', fontSize: '14px', fontWeight: '600' }}>Safe and Secure Payments.Easy returns.100% Authentic products.</Typography>
          </Box>
        </Box>
      </Box>
      :
      <Box className={classes.empty}>
        <Box style={{ fontSize: '19px', fontWeight: '600', background: '#fff',height:'50px',padding:'12px'}}>
          My Cart
        </Box>
        <Box style={{textAlign:'center',padding:'30px 0px 36px'}}>
          <Box>
            <img src={url3} style={{height:'162px'}}></img>
            <p style={{fontSize:'18px'}}>Your cart is empty!</p>
            <p style={{fontSize:'12px'}}>Add items to it now.</p>
            <Link to='/'><Button variant="contained" className={classes.Add} style={{margin:12,background:'#2874f0',fontSize:'13px',textDecoration:'none',width:'15%'}} size='large'>Shop now</Button></Link>
          </Box>
        </Box>
      </Box>
}
    </>
  )
}
