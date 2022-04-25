//Make product schema
import mongoose from "mongoose"
const orderschema = new mongoose.Schema({
   pid:String,
   uid:String,
   price:Number,
   url:String,
   title:String,
  });
  const Orderschema = mongoose.model('Orderschema',orderschema );
  export default Orderschema;