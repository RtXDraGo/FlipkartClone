import axios from "axios"
const port=process.env.PORT
export const getProduct=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get('/getall')
        dispatch({type:'success',payload:data})
        
    }catch(error){
        dispatch({type:'fail',payload:error.response})

    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`/product/${id}`);
        dispatch({type:'Getsuccess',payload:data})
        
    }catch(error){
        dispatch({type:'Getfail',payload:error.response})

    }
}
