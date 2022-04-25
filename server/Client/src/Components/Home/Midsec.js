import React from 'react'
import { ImageURL } from '../Data/Midsec'
import { makeStyles,Box,Typography } from '@material-ui/core'
const useStyle = makeStyles({
    wrap:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
    }
})
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
export default function Midsec() {
    const classes=useStyle();
  return (
      <>
      <Box className={classes.wrap}>
          {
              ImageURL.map((ele)=>(
                  <img src={ele} style={{width:'33.3%'}}/>
              ))
          }
      </Box>
      <img src={coronaURL} style={{width:'100%',marginTop:'20px'}}/>
      </>
      
  )
}
