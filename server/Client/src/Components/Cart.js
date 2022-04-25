import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core'
import { Button ,Badge} from '@material-ui/core'
import { Box } from '@material-ui/core'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import Login from './Login/Login';
import { useState } from 'react';
import { logincontext } from '../context/Context';
import { Typography } from '@mui/material';
import Profile from './Profile';
const useStyles = makeStyles({
    container: {
        display: 'flex',
        margin: 'auto 42px',
        marginBottom: '21px',
        width: '295px',
        height: '29px'
    },
    login: {
        padding: '0px 40px',
        backgroundColor: '#fff',
        borderRadius: '1px',
        color: '#2874f0',
        fontWeight: 550,
        height: '29px',
        textTransform:'none',
        boxShadow:'none',
        textDecoration:'none'
    },
    wrapper: {
        margin: '2px 26px',
        display: 'flex',
        fontSize: '16px',
        fontWeight: 550,
        textDecoration:'none',
        color:'white'
    },
    logo:
    {
        marginRight: '7px',
    },
    text:
    {
        marginLeft:'7px',
    },
    link:{
        textDecoration:'none',
    }
    
})
export default function Cart({}) {
    const classes = useStyles();
    let total=0;
    const [open,setOpen]=useState(false);
    const{details,setDetails}=useContext(logincontext);
    const handleclick=()=>{
        setOpen(true);
    }
    const {account,setAccount}=useContext(logincontext);
    return (
        <>
        <div className={classes.container}>
            <Box>
                {
                    account.Username?<Profile account={account} setAccount={setAccount}/>:
                    <Link to='#' className={classes.link}><Button variant="contained" className={classes.login} onClick={handleclick}>Login</Button></Link>
                }
            </Box>
            <Link to='#' className={classes.link}><Box className={classes.wrapper}>
                More
            </Box></Link>
            <Link to={`/getallcart/${account.uid}`} className={classes.wrapper}>
                <Badge badgeContent={details.length} color="secondary">
                    <ShoppingCartIcon className={classes.logo} />
                </Badge>
                <span className={classes.text}>Cart</span>
            </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount}   />
        </div>
        </>
    )
}