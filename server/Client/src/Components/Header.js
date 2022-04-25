import React from 'react'
import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import Searchbar from './Searchbar';
import Cart from './Cart';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    header: {
      backgroundColor: '#2874f0',
      height:'55px',
      boxShadow:'none',
      display:'flex',
      position:'sticky',
    },
    imglogo:{
        width:'75px'
    },
    pluslogo:
    {
        width:'10px',
        marginLeft:'2px'
    },
    cont:
    {
        display:'flex',
        flexDirection:'column',
        marginBottom:'11px',
        marginLeft:'12%',
        textDecoration:'none',
        color:'white'
    },
    plussec:
    {
        fontStyle:'Italic',
        fontSize:'11px',
        marginRight:'9px'
    },
    plustext:
    {
        color:'#ffe500',
        marginLeft:'1px',
        fontWeight:'500'

    }
  });
  
export default function Header({setLogedinuser}) {
    const classes = useStyles();
    const imglogo='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const pluslogo='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
  return (
    <AppBar className={classes.header}>
    <Toolbar>
        <Link to='/' className={classes.cont}>
        <img src={imglogo} className={classes.imglogo} />
        <div className={classes.plussec}>
        <span>Explore</span><span className={classes.plustext}>Plus</span><img src={pluslogo} className={classes.pluslogo}/>
        </div>
        </Link>
        <Searchbar/>
        <Cart setLogedinuser={setLogedinuser}/>
    </Toolbar>
  </AppBar>

  )
}