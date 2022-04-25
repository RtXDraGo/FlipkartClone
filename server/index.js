import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import Productsschema from "./Database/Productschema.js"
import Cartschema from "./Database/Cartschema.js"
import Razorpay from 'razorpay'
import crypto from 'crypto'
import Defaultdata from "./default.js"
import Orderschema from "./Database/Orderschema.js"
import path from "path"
import dotenv from 'dotenv'
dotenv.config();
const app = express()
const port =process.env.PORT
if(process.env.NODE_ENV==="production"){
    const __dirname=path.resolve();
    app.use(express.static(path.join(__dirname,"/Client/build")))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,"Client","build","index.html"))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("Api running");
    })
}
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect(
    process.env.MONGODB_URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("connected")
})
Defaultdata();
//Signin route
const userschema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,

    },
    Lastname: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 7,
    },
    Username: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 5,
        max: 20,
    },
    Password: {
        type: String,
        required: true
    },
    rpassword: {
        type: String,
        required: true
    }
});
//razor pay orders

app.post('/orders', async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id:'rzp_test_kPciUwGqkesYTl',
            key_secret:'Mto631SV4ksCRsrfmoklbj9G',
        });
        const options={
            amount: req.body.amount*100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString('hex'),
        }
        instance.orders.create(options,(err,order)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send(order)
            }
        })
    } catch(error) {
        console.log(error)
    }
})
//deleteall
app.post('/emptycart',async(req,res)=>{
    const uid=req.body.id
    const details=req.body.details
    details.map((ele)=>{
        const orderitem = new Orderschema({
            pid:ele.pid,
            uid: ele.uid,
            price: ele.price,
            url: ele.url,
            title: ele.title,
        })
        orderitem.save(err=>{
            console.log(err)
        })
    })
    Cartschema.deleteMany({ uid: uid }, () => {
        Cartschema.find({ uid: uid }, (err, products) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(products)
            }
        })
    })
    
})

//Payment verify

app.post('/verifypay',async(req,res)=>{
    try{
        const{razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body
        const sign=razorpay_order_id + "|" + razorpay_payment_id
        const expectedsign = crypto.createHmac('sha256','Mto631SV4ksCRsrfmoklbj9G')
                   // updating data
                   .update(sign.toString())
                   // Encoding to be used
                   .digest('hex');
        if(razorpay_signature===expectedsign){
            res.status(200).send({message:"succ"})
        }else{
            res.send({message:"Invalid signature send"})
        }
    }catch(err){
        console.log(err)
    }
})



const User = mongoose.model('User', userschema);
app.post("/signin", (req, res) => {
    const { fname, lname, username, email, password, rpassword } = req.body
    console.log(fname, lname, username, email, password, rpassword);
    User.findOne({ Email: email }, (err, user) => {
        if (user) {
            res.send({ message: "Already registered", user: user })
        }
        else {
            const user = new User({
                Firstname: fname,
                Lastname: lname,
                Username: username,
                Email: email,
                Password: password,
                rpassword: rpassword
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Sucsessful register", user: user })
                }
            })
        }
    })
})

//login route

app.post('/login', (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    User.findOne({ Email: email }, (err, user) => {
        if (user) {
            if (password === user.Password) {
                Cartschema.find({ uid: user._id }, (err, products) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send({ message: "Login succsesfull", user: user, products: products })
                    }
                }
                )
            } else {
                res.status(400).send("password do not match")
            }
        } else {
            res.status(400).send("User not registered")
        }
    })

})

//Get product
export const getProduct = async (req, res) => {
    Productsschema.find({}, (err, products) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(products);
        }
    })
}
//

//Save into cart route
app.post("/addcart", (req, res) => {
    const { pid, uid, price, mrp, url, discount, title } = req.body.data
    const cartitem = new Cartschema({
        pid: pid,
        uid: uid,
        price: price,
        mrp: mrp,
        url: url,
        discount: discount,
        title: title,
    })
    cartitem.save(err => {
        if (err) {
            console.log(err)
        }
        Cartschema.find({ uid: uid }, (err, products) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(products);
            }
        })
    })

})
//delete all

//Delete cart
app.post('/deletecart', (req, res) => {
    const { id, uid } = req.body
    Cartschema.deleteOne({ _id: id }, () => {
        Cartschema.find({ uid: uid }, (err, products) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(products);
            }
        })
    })
})
//deletesingle
app.post('/deletecart1', (req, res) => {
    const { pid, uid,url,title,cost } = req.body
    const orderitem = new Orderschema({
        pid:pid,
        uid:uid,
        price:cost,
        url:url,
        title:title,
    })
    orderitem.save(err=>{
        console.log(err)
    })
    Cartschema.deleteOne({ pid: pid }, () => {
        Cartschema.find({ uid: uid }, (err, products) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(products);
            }
        })
    })
})

//increment

export const getProductById = async (req, res) => {
    Productsschema.find({ id: req.params.id }, (err, products) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(products);
        }
    })
}
//Order details
export const getorderdetails = async (req, res) => {
    Orderschema.find({ uid: req.params.id }, (err, products) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(products);
        }
    })
}


export const getCartDetails = async (req, res) => {
    Cartschema.find({ uid: req.params.id }, (err, products) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(products);
        }
    })
}

//Orders


app.get("/getallcart/:id", getCartDetails);
app.get("/getall", getProduct);
app.get("/product/:id", getProductById);
app.get('/orders/:id',getorderdetails)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
