import { Typography,Menu,MenuItem } from '@material-ui/core'
import React, { useContext } from 'react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logincontext } from '../context/Context';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@material-ui/core';
const useStyle=makeStyles({
    logout:{
        marginTop:'40px'

    },
    but:
    {
        backgroundColor: '#fff',
        borderRadius: '1px',
        fontWeight: 550,
        height: '29px',
        textTransform:'none',
        boxShadow:'none',
        textDecoration:'none',
        color:'white',
        fontWight:'600'
    }
})
export default function Profile({ account, setAccount }) {
    const navigate=useNavigate();
    const{details,setDetails}=useContext(logincontext)
    const [open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(false)
    }
    const handle=(e)=>{
        setOpen(e.currentTarget)
    }
    const logout=()=>{
        setAccount({
            Username:''
        })
        setDetails([])
        navigate('/')
    }
    const orders1=()=>{
        navigate(`/orders/${account.uid}`)
    }
    const classes=useStyle();
    return (
        <>
            <Link to='#' className={classes.but}><Typography onClick={handle} style={{ marginTop: '2px' }}>{account.Username}</Typography></Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.logout}
            >
                <MenuItem onClick={()=>{handleClose(); logout();}}>
                    <PowerSettingsNewIcon/>Logout
                </MenuItem>
                <MenuItem onClick={()=>{handleClose(); orders1();}}>
                    <WorkHistoryIcon onClick={()=>{handleClose(); orders1();}}/>Orders
                </MenuItem>
            </Menu>
        </>
    )
}
