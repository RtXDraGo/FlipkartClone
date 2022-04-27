import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { logincontext } from '../context/Context';
import { Box, Typography } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { ClassSharp } from '@material-ui/icons';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const useStyle = makeStyles({
    container: {

    },
    imgtext: {
        display: 'flex'
    },
    boxes: {
        display:'flex',
        justifyContent:'space-around',
        padding:'16px',
        margin:'15px',
        boxShadow: '0 8px 3px 0 rgb(0,0,0,0.2)',
    
    },
    dot:{
        height:'10px',
        width:'10px',
        background:'#26a541',
        borderRadius:'50%',
        marginRight:'5px'
    },
    rup:{
        position:'relative',
        top:'5px'
    }
})
export default function Orders() {
    const classes = useStyle();
    const [order1, setOrder1] = useState([]);
    const { account, setAccount } = useContext(logincontext)
    useEffect(() => {
        axios.get(`/orders/${account.uid}`)
            .then(res => setOrder1(res.data))
    }, [])
    return (
        <Box className={classes.container}>
            {
                order1 && order1.length &&
                order1.map((ele) => (
                    <Box className={classes.boxes}>
                        <Box className={classes.imgtext}>
                            <img src={ele.url} style={{ height: '75px', width: '75px' }}></img>
                            <Box style={{marginLeft:'25px'}}>
                                <Typography style={{ fontSize: '14px' }}>{ele.title}</Typography>
                                <Typography style={{ fontSize: '12px', color: '#878787' }}>Color:Brown</Typography>
                                <Typography style={{ fontSize: '12px', color: '#878787' }}>Inline Creation</Typography>
                            </Box>
                        </Box>
                        <Typography><CurrencyRupeeIcon className={classes.rup} />{ele.price}</Typography>
                        <Typography style={{ fontSize: '14px', fontWeight: '600' }}><Box className={classes.dot} style={{display:'inline-block'}}></Box>Delivered on Dec 22,2023</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}
