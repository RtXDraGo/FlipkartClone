import { makeStyles, TextField, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import { useContext } from 'react'
import { logincontext } from '../context/Context'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Button } from '@material-ui/core'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios'
import clsx from 'clsx';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductDetails } from '../redux/actions/productAction';
import { useSelector } from 'react-redux'
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
        width: '87%',
        margin: '4px',
        boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)',
        padding: '10px',
        height: '13%'
    },
    right: {
        width: '100%',
        margin: '6px',
        boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)',
        height: '345px'
    },
    heading: {
        padding: '8px 24px',
        height: '48px',
        background: '#2874f0',
        color: 'white',
        fontWeight: '600',
        fontSize: '16px',
        margin: '7px 0px'
    },
    cont: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '26px 0px 13px 0px'

    },
    text: {
        marginLeft: '15px',
        fontWeight: '600',
        fontSize: '14px'
    },
    point: {
        fontSize: '14px'
    },
    Add: {
        background: '#ff9f00',
        width: '130%',
        height: '48px',
        borderRadius: '0px',
        color: '#fff',
        margin: 'auto',
        fontWeight: '600'
    },
    cont1: {
        padding: '26px 0px 13px 0px'
    },
    Add1: {
        background: '#ff9f00',
        width: '40%',
        color: '#fff',
        fontWeight: '600',
        borderRadius: '0px',
        height: '48px',

    },
    leftin: {
        padding: '24px',
        boxShadow: '0px 1px 1px 0 rgb(0 0 0/20%)'
    },
    imgtext: {
        display: 'flex'
    },
    img: {
        height: '112px',
        width: '112px',
        display: 'inline'
    },
    logo: {
        height: 15,
        marginLeft: 11,
        position: 'relative',
        top: 3
    },
    cost: {
        fontSize: 18,
        fontWeight: 550,
        bottom: '2px'
    },
    mrp: {
        marginLeft: 9,
        position: 'relative',
        bottom: 2,
        marginRight: 9,
        fontSize: 14,
        textDecoration: 'line-through'
    },
    bt: {
        borderRadius: '15px',
        border: '1px solid black',
        margin: '5px',
        cursor: 'pointer'
    },
    cont2: {
        padding: '26px 0px 13px 0px'
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
    smallbox: {
        padding: '3px 7px',
        borderRadius: '2px',
        background: '#f0f0f0',
        position: 'relative',
        top: '5px',
        color: '#2874f0'
    },
})
export default function Final1() {
    const { product } = useSelector(state => state.getProductDetails)
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch])//eslint-disable-line react-hooks/exhaustive-deps
    const navigate=useNavigate();
    const { account, setAccount } = useContext(logincontext)
    const url1 = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const url2 = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg'
    const url3 = 'https://www.tcv.com/wp-content/uploads/2016/11/Razorpay_blog_logo.png'
    const classes = useStyle();

    const { details, setDetails } = useContext(logincontext);
    const [add, setAdd] = useState();
    const [val5,setVal5]=useState(1)
    const [val1, setVal1] = useState(false)
    const [val2, setVal2] = useState(false)
    const [val3, setVal3] = useState(false)
    const [val4, setVal4] = useState(false)
    const [num, setNum] = useState(false)
    const [num1, setNum1] = useState(false)
    const [num2, setNum2] = useState(false)
    const [box1, setBox1] = useState({
        display: 'flex',
        background: '#2874f0',
        color: 'white',


    })
    const [box2, setBox2] = useState({
        display: 'none',
        background: 'white',
        color: '#878787',
    })
    const [box3, setBox3] = useState({
        display: 'none',
        background: 'white',
        color: '#878787'
    })
    const beforeadd = () => {

        setBox2({
            display: 'block',
            background: '#2874f0',
            color: 'white',
        })
        setBox1({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setVal1(true)
        setNum(true)
    }
    const beforecheck = () => {
        setBox2({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setBox3({
            display: 'block',
            background: '#2874f0',
            color: 'white'
        })
        setVal2(true)
        setNum1(true);

    }
    const initpayment = (data) => {
        const options = {
            key: 'rzp_test_kPciUwGqkesYTl',
            amount: data.amount,
            currency: data.currency,
            description: 'Test Transaction',
            image: url3,
            order_id: data.id,
            handler: function (response) {
                try {
                    axios.post('/verifypay', response)
                        .then(delitem(account.uid))
                } catch (error) {
                    console.log(error)
                }

            }
            

        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }
    ///delete item
    let pid=product[0].id
    let url=product[0].url
    let title=product[0].title.longTitle
    let cost=product[0].price.cost
    const delitem=(uid)=>{
        axios.post('/deletecart1',{pid,uid,url,title,cost})
        .then(res=>setDetails(res.data))
        navigate("/")
     }

    const final1 = async () => {
        setBox3({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setVal3(true)
        setNum2(true)
        try {
            await axios.post('/orders', { amount: product[0].price.cost*val5 })
                .then(res => initpayment(res.data))
        }catch(error)
        {
            console.log(error)
        }
    }
    const first1 = () => {
        setBox2({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setBox1({
            display: 'flex',
            background: '#2874f0',
            color: 'white',
        })
        setBox3({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setVal1(false)
        setVal2(false)
        setNum(true)
    }
    const first2 = () => {
        setBox2({
            display: 'block',
            background: '#2874f0',
            color: 'white',
        })
        setBox3({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setBox1({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setVal2(false)
        setVal3(false)
        setNum1(true);
    }
    const first3 = () => {
        setBox3({
            display: 'block',
            background: '#2874f0',
            color: 'white'
        })
        setBox1({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setBox2({
            display: 'none',
            background: 'white',
            color: '#878787'
        })
        setVal3(false)
        setVal4(false)
        setNum2(true)

    }
    let qnt=1;
    const dec = (pid) => {
        setVal5(val5-1)
    }
    const inc = (pid) => {
        setVal5(val5+1)    }

    const delete1 = async (id, uid) => {
        await axios.post('/deletecart', { id, uid })
            .then(res => setDetails(res.data))
    }
    const address = (e) => {
        const { name, value } = e.target
        console.log(value)
        setAdd(
            value
        )
    }
    return (
        <>
            <Box className={classes.maincont}>
                <Box className={classes.left}>
                    <Box>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', color: `${box1.color}`, background: `${box1.background}`, height: '80px', marginTop: '15px', boxShadow: '0 1px 8px 0 rgb(0,0,0,0.2)' }}>
                            <Box className={classes.heading} style={{ color: `${box1.color}`, background: `${box1.background}` }}>
                                <Box style={{ fontSize: '19px', display: 'flex' }}>
                                    {
                                        num === true ?
                                            <Box style={{ fontSize: '12px' }}>
                                                <Box className={classes.smallbox}>1</Box>
                                            </Box> :
                                            <Box style={{ fontSize: '12px', background: '#fff' }}>
                                                <Box className={classes.smallbox}>1</Box>
                                            </Box>
                                    }
                                    <Box style={{ marginLeft: '10px' }}>
                                        Login
                                    </Box>
                                    <Box style={{ marginLeft: '10px', color: '#2874f0' }}>
                                        {
                                            num === true ? <DoneIcon style={{ fontSize: '18px', fontWeight: 'bold', position: 'relative', top: '3px', right: '7px' }} /> :
                                                <DoneIcon style={{ display: 'none' }} />
                                        }

                                    </Box>
                                </Box>
                                {
                                    val1 === false ?
                                        <Box style={{ display: 'none' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{account.Username}</span><span style={{ marginLeft: '14px', fontSize: '14px', color: 'black', fontWeight: 'normal' }}>{account.email}</span>
                                        </Box> :
                                        <Box style={{ display: 'block' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{account.Username}</span><span style={{ marginLeft: '14px', fontSize: '14px', color: 'black', fontWeight: 'normal' }}>{account.email}</span>
                                        </Box>
                                }
                            </Box>
                            {
                                val1 === false ?
                                    <Button variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'none' }}>Change</Button> :
                                    <Button onClick={(() => first1())} variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'block' }}>Change</Button>
                            }
                        </Box>
                        <Box className={classes.cont} style={{ display: `${box1.display}` }}>
                            <Box>
                                <span style={{ color: '#878787' }}>Name</span><span className={classes.text}>{account.Username}</span>
                                <Typography />
                                <span style={{ color: '#878787' }}>Email</span><span className={classes.text}>{account.email}</span>
                                <Typography />
                                <Button onClick={(() => beforeadd())} variant="contained" className={classes.Add} style={{ margin: 12, background: '#fb641b' }} size='large'>CONTINUE CHECKOUT</Button>
                            </Box>
                            <Box>
                                <Typography style={{ color: '#878787', fontSize: '14px' }}>Advantages of our secure Login</Typography>
                                <Typography style={{ fontSize: '14px', margin: '16px 0px' }}><LocalShippingIcon style={{ fontSize: '17px', color: '#2874f0', marginRight: '13px' }} />Easily Track Orders, Hassle free Returns</Typography>
                                <Typography style={{ fontSize: '14px', margin: '16px 0px' }}><NotificationsIcon style={{ fontSize: '17px', color: '#2874f0', marginRight: '13px' }} />Get Relevant Alerts and Recommendation</Typography>
                                <Typography style={{ fontSize: '14px', margin: '16px 0px' }}><StarRateIcon style={{ fontSize: '17px', color: '#2874f0', marginRight: '13px' }} />Wishlist, Reviews, Ratings and more.</Typography>
                            </Box>
                        </Box>

                    </Box>
                    <Box>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', color: `${box2.color}`, background: `${box2.background}`, height: '80px', marginTop: '15px', boxShadow: '0 1px 8px 0 rgb(0,0,0,0.2)' }}>
                            <Box className={classes.heading} style={{ color: `${box2.color}`, background: `${box2.background}` }}>
                                <Box style={{ fontSize: '19px', display: 'flex' }}>
                                    {
                                        num1 === true ?
                                            <Box style={{ fontSize: '12px' }}>
                                                <Box className={classes.smallbox}>2</Box>
                                            </Box> :
                                            <Box style={{ fontSize: '12px', background: '#fff' }}>
                                                <Box className={classes.smallbox}>2</Box>
                                            </Box>
                                    }
                                    <Box style={{ marginLeft: '10px' }}>
                                        Delivary Address
                                    </Box>
                                    <Box style={{ marginLeft: '10px', color: '#2874f0' }}>
                                        {
                                            num1 === true ? <DoneIcon style={{ fontSize: '18px', fontWeight: 'bold', position: 'relative', top: '3px', right: '7px' }} /> :
                                                <DoneIcon style={{ display: 'none' }} />
                                        }

                                    </Box>
                                </Box>
                                {
                                    val2 === false ?
                                        <Box style={{ display: 'none' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{account.Username}</span><span style={{ marginLeft: '14px', fontSize: '14px', color: 'black', fontWeight: 'normal' }}>{add}</span>
                                        </Box> :
                                        <Box style={{ display: 'block' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{account.Username}</span><span style={{ marginLeft: '14px', fontSize: '14px', color: 'black', fontWeight: 'normal' }}>{add}</span>
                                        </Box>
                                }
                            </Box>
                            {
                                val2 === false ? <Button variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'none' }}>Change</Button> :
                                    <Button onClick={(() => first2())} variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'block' }}>Change</Button>

                            }
                        </Box>
                        <Box className={classes.cont1} style={{ display: `${box2.display}` }}>
                            <TextField required fullWidth id="outlined-basic" label="Enter Address" variant="outlined" name='address' value={add} onChange={address} />
                            <Button onClick={(() => beforecheck())} variant="contained" className={classes.Add1} style={{ margin: 12, background: '#fb641b' }} size='large'>DELIVER HERE</Button>
                        </Box>
                    </Box>
                    <Box>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', color: `${box3.color}`, background: `${box3.background}`, height: '80px', marginTop: '15px', boxShadow: '0 1px 8px 0 rgb(0,0,0,0.2)' }}>
                            <Box className={classes.heading} style={{ color: `${box3.color}`, background: `${box3.background}` }}>
                                <Box style={{ fontSize: '19px', display: 'flex' }}>
                                    {
                                        num2 === true ?
                                            <Box style={{ fontSize: '12px' }}>
                                                <Box className={classes.smallbox}>3</Box>
                                            </Box> :
                                            <Box style={{ fontSize: '12px', background: '#fff' }}>
                                                <Box className={classes.smallbox}>3</Box>
                                            </Box>
                                    }
                                    <Box style={{ marginLeft: '10px' }}>
                                        Order Summary
                                    </Box>
                                    <Box style={{ marginLeft: '10px', color: '#2874f0' }}>
                                        {
                                            num2 === true ? <DoneIcon style={{ fontSize: '18px', fontWeight: 'bold', position: 'relative', top: '3px', right: '7px' }} /> :
                                                <DoneIcon style={{ display: 'none' }} />
                                        }

                                    </Box>
                                </Box>
                                {
                                    val3 === false ?
                                        <Box style={{ display: 'none' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{details.length} items</span>
                                        </Box> :
                                        <Box style={{ display: 'block' }}>
                                            <span style={{ fontSize: '14px', color: 'black', fontWeight: '600' }}>{details.length} items</span>
                                        </Box>
                                }
                            </Box>
                            {
                                val3 === false ? <Button variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'none' }}>Change</Button> :
                                    <Button onClick={(() => first3())} variant="outlined" style={{ background: 'white', color: '#2874f0', height: '41px', margin: '12px', display: 'block' }}>Change</Button>


                            }
                        </Box>
                        <Box className={classes.cont2} style={{ display: `${box3.display}` }}>
                            {
                                    <Box className={classes.leftin} style={{ height: '16%', padding: '12px' }}>
                                        <Box className={classes.imgtext}>
                                            <img src={product[0].url} className={classes.img}></img>
                                            <Box style={{ padding: '0px 24px 12px' }}>
                                                <Typography style={{ marginLeft: '0px', fontSize: '14px', marginBottom: '18px' }}>{product[0].title.longTitle}</Typography>
                                                <Typography style={{ marginLeft: '0px', fontSize: '14px', marginBottom: '18px', color: '#878787' }}>Seller:Inline Creation<img src={url1} className={classes.logo}></img></Typography>
                                                <Typography className={classes.cost} style={{ display: 'inline' }}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3, height: 18 }} />{product[0].price.cost*val5}</Typography><Typography style={{ display: 'inline' }} className={classes.mrp}><CurrencyRupeeIcon style={{ position: 'relative', top: 2, left: 3, fontSize: 16 }}></CurrencyRupeeIcon>{product[0].price.mrp*val5}</Typography><Typography style={{ display: 'inline' }} className={clsx(classes.mrp, classes.discount)}>{product[0].price.discount} off</Typography>
                                            </Box>
                                        </Box>
                                        <Box style={{ textAlign: 'left' }}>
                                            <span style={{ textAlign: 'center', margin: '8px' }}>
                                                <button className={classes.bt} onClick={() => dec(product[0].id)}>-</button>
                                                <input type='text' placeholder={val5} style={{ width: '7%', textAlign: 'center' }}></input>
                                                <button className={classes.bt} onClick={() => inc(product[0].id)}>+</button></span>
                                            <p onClick={() => delete1(product[0].pid, account.uid)} style={{ fontSize: '16px', fontWeight: '600', cursor: 'pointer', display: 'inline' }}>REMOVE</p>
                                        </Box>
                                    </Box>

    
                            }
                            <Box style={{ textAlign: 'right', position: 'sticky', bottom: '0px', background: '#fff', boxShadow: '0 8px 8px 0 rgb(0,0,0,0.2)' }}>
                                <Button variant="contained" onClick={(() => final1())} className={classes.Add} style={{ margin: 12, background: '#fb641b', fontWeight: '600', width: '35%' }} size='large'>PROCEED FOR PAYMENT</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.auth}>
                    <Box className={classes.right}>
                        <Box className={classes.right} style={{ padding: '0px 28px' }}>
                            <Box style={{ position: 'relative', top: '10px', borderBottom: '1px solid rgb(223,220,220)', fontSize: '18px', color: '#878787', fontWeight: '600' }}>PRICE DETAILS</Box>
                            <Box className={classes.price}>
                                <Box>Price ({details.length} items)</Box>
                                <Box style={{ fontSize: '18px' }}><CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{product[0].price.mrp*val5}</Box>
                            </Box>
                            <Box className={classes.price}>
                                <Box >Discount</Box>
                                <Box style={{ color: '#388e3c', fontSize: '18px' }}>-<CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{(product[0].price.mrp*val5)-(product[0].price.cost*qnt)}</Box>
                            </Box>
                            <Box className={classes.price} style={{ borderBottom: '1px dotted grey' }}>
                                <Box>Delivary Charges</Box>
                                <Box style={{ color: '#388e3c', fontSize: '18px' }}>FREE</Box>
                            </Box>
                            <Box className={classes.price1} style={{ borderBottom: '1px dotted grey' }}>
                                <Box>Total Amount</Box>
                                <Box style={{ fontSize: '18px' }}><CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />{product[0].price.cost*val5}</Box>
                            </Box>
                            <Box style={{ position: 'relative', top: '20px', padding: '5px 0px', color: '#388e3c', fontWeight: '600', fontSize: '16px' }}>You will save <CurrencyRupeeIcon style={{ position: 'relative', top: '4px', fontSize: '18px' }} />1345 on this order</Box>
                        </Box>
                        <Box className={classes.auth1}>
                            <img src={url2}></img><Typography style={{ marginLeft: '12px', color: '#878787', fontSize: '14px', fontWeight: '600' }}>Safe and Secure Payments.Easy returns.100% Authentic products.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
