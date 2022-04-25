import axios from "axios"
export const getProduct=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get("http://localhost:8000/getall")
        dispatch({type:'success',payload:data})
        
    }catch(error){
        dispatch({type:'fail',payload:error.response})

    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`http://localhost:8000/product/${id}`);
        dispatch({type:'Getsuccess',payload:data})
        
    }catch(error){
        dispatch({type:'Getfail',payload:error.response})

    }
}
