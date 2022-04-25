//Make product schema
import mongoose from "mongoose"
const cartschema = new mongoose.Schema({
   pid:String,
   uid:String,
   price:Number,
   mrp:Number,
   url:String,
   discount:String,
   title:String,
   qnt:
   {
       type:Number,
       default:1
    }

  });
  const Cartschema = mongoose.model('Cartschema',cartschema );
  export default Cartschema;