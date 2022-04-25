import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../Data/Banner'
import { makeStyles } from '@material-ui/core'
import { boxSizing, textAlign } from '@mui/system'
const useStyle=makeStyles({
    image:{
        width:'100%',
        height:'280px',
    }
})
export default function Banner() {
    const classes=useStyle();
    return (
        <box className={classes.cont}>
        <Carousel
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:'white',
                    color:'#494949',
                    borderRadius:4,
                    margin:0,
                    top:'12px',
                    margin:'auto',
                    height:'83px'
                    
                }
            }}
            >
            {
                bannerData.map(image =>(
                    <img src={image} className={classes.image}/>
                ))
            }
        </Carousel>
        </box>

    )
}