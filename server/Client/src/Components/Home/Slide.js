import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Box } from '@material-ui/core'
import { Button, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { logincontext } from '../../context/Context';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const useStyles = makeStyles({
    image: {
        height: '150px',
        width: '150px',
        padding: '25px 15px'
    },
    dealday: {
        marginTop: '8px',
        fontWeight: '660',
        display: 'inline-block',
        padding: '25px 10px',
        fontSize: '22px',
        marginBottom: '12px',
        display: 'flex',
        borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    timer: {
        fontSize: '16px',
        fontWeight: '400',
        marginLeft: '10px'
    },
    button: {
        marginLeft: 'auto',
    },
    text1: {
        textAlign: 'center',

    },
    text2: {
        textAlign: 'center',
        paddingTop: '8px',
    },
    text3: {
        textAlign: 'center',
        paddingTop: '7px',
    },
    tagBox:{
        textAlign:'center',
        padding:'25px',
        background:'#FFFFFF'
    },
    cont:{
        background:'#FFFFFF',
        padding:'10px',
        borderBottom: '1px solid rgba(0,0,0,.1)'

    }
})
const Slide=({ timer,title,products})=> {
    const classes = useStyles();
    const renderer = ({ hours, minutes, seconds }) => {
        return <span>{hours} : {minutes} : {seconds} Left</span>
    
    };
    return (
        <>
        <Box className={classes.cont}>
            <Box className={classes.dealday}>
                <div>{title}</div>
                {
                    timer && 
                    <>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" style={{ marginLeft: 29 }} />
                <span className={classes.timer}><Countdown date={Date.now() + 5.04e+7} renderer={renderer} /></span>
                <Button variant='contained' color='primary' className={classes.button} style={{ marginLeft: 'auto' }}>View All</Button>
                </>
                }
            </Box>
            <Carousel responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                autoPlay={false}
            >
                {
                 products.map((ele) => (
                     <Link to={`product/${ele.id}`} style={{textDecoration:'none',color:'black'}}>
                        <Box className={classes.tagBox}>
                            <img src={ele.url} alt="" srcset="" className={classes.image} />
                            <Typography className={classes.text1} style={{ fontSize: '14px', fontWeight: '600' }}>{ele.title.shortTitle}</Typography>
                            <Typography className={classes.text2} style={{
                                color: '#388e3c', fontSize: '14px',
                            }}>{ele.discount}</Typography>
                            <Typography className={classes.text3} style={{
                                fontSize: '14px', fontWeight: '300px', opacity: '.6'
                            }}>{ele.tagline}</Typography>
                        </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
        </>
    )
}
export default Slide;
