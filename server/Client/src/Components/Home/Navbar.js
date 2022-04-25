import React from 'react'
import { navData } from '../Data/Navdata'
import { makeStyles,Box,Typography } from '@material-ui/core'
const useStyle = makeStyles({
    maincont:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'135px',
        marginRight:'179px',
    },
    logo:{
        width:'55px',
        padding:'12px 8px',
        paddingBottom:'0px',
    },
    text:{
        fontSize:14,
        fontWeight:560,
    }

})
export default function Navbar() {
    const classes = useStyle();
    return (
        <Box className={classes.maincont}>
            {
                navData.map((ele) => (
                    <Box className={classes.container}>
                            <img src={ele.url} alt="" srcset="" className={classes.logo} />
                            <Typography className={classes.text}>{ele.text}</Typography>
                    </Box>

                ))
            }
        </Box>
    )
}