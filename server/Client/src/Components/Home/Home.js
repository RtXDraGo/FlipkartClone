import React, { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { makeStyles, Box } from '@material-ui/core'
import Slide from './Slide'
import Midsec from './Midsec'
import { getProduct as listproduct} from '../../redux/actions/productAction'
// import { products } from '../Data/Product'
import { useSelector,useDispatch } from 'react-redux'
const useStyle = makeStyles({
    innerBox: {
        padding: '2px',
        backgroundColor: '#F2F2F2',
        marginTop: '12px',
    },
    innerBox1: {
        padding: '10px',
        backgroundColor: 'white',
        marginTop: '12px',
        display: 'flex',
    },
    right: {
        background: '#FFFFFF',
        padding: '9px',
        margin: '0px 0 0 5px',
    }
})
export default function Home({}) {
    const {products}=useSelector(state=>state.getProduct)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listproduct())
    },[dispatch])
    const classes = useStyle();
    return (
        <>
        <div>
            <Navbar />
            <Box className={classes.innerBox}>
                <Banner />
            </Box>
            <Box className={classes.innerBox1}>
                <Box className={classes.mainBox} style={{ width: '83%' }}>
                    <Slide timer={true} title="Deals of the Day" products={products}/>
                </Box>
                <Box className={classes.right}>
                    <img src='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70' style={{ width: 250,height:'454px' }}></img>
                </Box>
            </Box>
            <Midsec/>
            <Slide timer={false} title="Auto Accessories" products={products}/>
            <Slide timer={false} title="Fashion For Everyone" products={products}/>
            <Slide timer={false} title="Men's Footwear" products={products}/>
            <Slide timer={false} title="Best Battery Phones" products={products}/>
        </div>
        </>
    )
}