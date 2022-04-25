//Make product schema
import mongoose from "mongoose"
const productschema = new mongoose.Schema({
   id:String,
   url:String,
   detailUrl:String,
   title:Object,
   price:Object,
   description:String,
   discount:String,
   tagline:String,
  });
  const Productsschema = mongoose.model('Productsschema',productschema );
  export default Productsschema;