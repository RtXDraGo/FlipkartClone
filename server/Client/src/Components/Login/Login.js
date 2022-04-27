import React, { useContext } from 'react'
import { Button, Dialog, DialogContent, TextField } from '@mui/material'
import { makeStyles, Box, Typography } from '@material-ui/core'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { logincontext } from '../../context/Context';
const useStyle = makeStyles(theme => ({
    content: {
        height: '64vh',
        width: '90vh'
    },
    cont: {
        display: 'flex'
    },
    imgsec: {
        height: '64vh',
        width: '40%',
        background: '#2874f0'


    },
    formsec: {
        height: '',
        width: '60%',
        padding: '56px 35px 16px',
        '& > *': {
            marginTop: 20
        }
    },
    text: {
        padding: '21px'
    },
    logo: {
        position: 'relative',
        top: '70px',
        left: '20px'
    },
    box: {
        padding: '8px 10px 10px 0',
    },
    pol: {
        marginTop: '32px',
        fontSize: '12px',
    },
    foot: {
        position: 'relative',
        top: '26px'
    },
    error: {
        fontSize: '12px',
        color: '#ff6161'
    }
}))
export default function Login({ open, setOpen, setAccount,setLogedinuser }) {
    const {cart,setCart}=useContext(logincontext)
    const classes = useStyle();
    const [msg, setMsg] = useState('')
    const{details,setDetails}=useContext(logincontext)
    const initialval = {
        login: {
            view: 'login',
            heading: 'Login',
            subheading: 'Get access to your Orders, Wishlist and Recommendations'
        },
        signup: {
            view: 'signin',
            heading: 'Looks like you are new here!',
            subheading: 'Sign up with your mobile number to get started'
        }
    }
    const [account, toggleAccount] = useState(initialval.login)
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        rpassword: ""
    })
    const [loginuser, setloginUser] = useState({
        email: "",
        password: ""
    })
    //for signup
    const handle = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    //for login
    const handlelogin = e => {
        const { name, value } = e.target
        setloginUser({
            ...loginuser,
            [name]: value
        })
    }

    const handleclose = () => {
        setOpen(false);
        toggleAccount(initialval.login);
    }
    const submit = () => {
        const { fname, lname, username, email, password, rpassword } = user
        if (password == rpassword) {
            handleclose();
            axios.post('/signin', user)
                .then(res => {
                    setAccount({
                        Username: res.data.user.Username,
                        uid: res.data.user._id,
                        email:res.data.user.Email
                    })
                }
                )
        }

        else {
            console.log("error");
        }
    }
    const submitlogin = () => {
        axios.post('/login', loginuser)
            .then(
                res => {
                    handleclose();
                    setAccount({
                        Username: res.data.user.Username,
                        uid: res.data.user._id,
                        email:res.data.user.Email
                    })
                    setCart(res.data.products)
                    setDetails(res.data.products)
                   
                }
            )
            .catch(function (error) {
                if (error.response)
                    setMsg(error.response.data)
            })
    }
    const signin = () => {
        toggleAccount(initialval.signup)
    }
    return (
        <>
            <Dialog open={open} onClose={handleclose} PaperProps={{ sx: { maxWidth: 'none' } }}>
                <DialogContent className={classes.content} style={{ padding: '0px' }}>
                    <Box className={classes.cont}>
                        <Box className={classes.imgsec}>
                            <Box className={classes.text}>

                                <Typography style={{ fontSize: '28px', color: '#fff', fontWeight: '550' }}>{account.heading}</Typography>
                                <Typography style={{ fontSize: '18px', color: '#fff', marginTop: '16px' }}>{account.subheading}</Typography>


                            </Box>

                            <Box className={classes.logo}>
                                <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' />
                            </Box>
                        </Box>
                        {
                            account.view === 'login' ?
                                <Box className={classes.formsec}>
                                    <TextField value={loginuser.email} name="email" label='Enter Email/Mobile number' variant='standard' fullWidth onChange={handlelogin} />
                                    <TextField name="password" value={loginuser.password} label='Enter Password' variant='standard' fullWidth onChange={handlelogin} />
                                    <Typography className={classes.error}>{msg}</Typography>
                                    <Typography className={classes.pol}>By continuing, you agree to Flipkart's <span style={{ color: '#2874f0' }}> Terms of Use </span> and <span style={{ color: '#2874f0' }}> Privacy Policy </span>.</Typography>
                                    <Button onClick={submitlogin} variant='contained' fullWidth style={{ marginTop: '12px', borderRadius: '0px', background: '#FB641B', fontSize: '14px', fontWeight: '550', height: '50px' }}>Login</Button>
                                    <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                    <Button variant='contained' fullWidth style={{ marginTop: '12px', borderRadius: '0px', background: '#FFFFFF', color: '#2874f0', fontSize: '14px', fontWeight: '545', height: '50px' }}>Request OTP</Button>
                                    <Typography onClick={() => signin()} style={{ cursor: 'pointer', textAlign: 'center', color: '#2874f0', fontSize: '14px', fontWeight: '545' }} className={classes.foot}>New to Flipkart? Create an account</Typography>
                                </Box> :
                                <Box className={classes.formsec}>
                                    <TextField name='fname' label='Enter FirstName' variant='standard' fullWidth onChange={handle} value={user.fname} />
                                    <TextField name='lname' label='Enter LastName' variant='standard' fullWidth onChange={handle} value={user.lname} />
                                    <TextField name='username' label='Enter UserName' variant='standard' fullWidth onChange={handle} value={user.username} />
                                    <TextField name='email' label='Enter Email' variant='standard' fullWidth onChange={handle} value={user.email} />
                                    <TextField name='password' label='Enter Password' variant='standard' fullWidth onChange={handle} value={user.password} />
                                    <TextField name='rpassword' label='Retype password' variant='standard' fullWidth onChange={handle} value={user.rpassword} />
                                    <Button onClick={submit} variant='contained' fullWidth style={{ marginTop: '12px', borderRadius: '0px', background: '#FB641B', fontSize: '14px', fontWeight: '550', height: '50px' }}>SignUp</Button>
                                </Box>
                        }
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}
