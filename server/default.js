import { products } from "./Constants/Product.js";
import Productsschema from "./Database/Productschema.js";
const Defaultdata=async()=>{
    try{
        await Productsschema.deleteMany({});
        await Productsschema.insertMany(products);
        console.log("Succsesfull");
    }catch{
        console.log("Error:");
    }
}
export default Defaultdata;