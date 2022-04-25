import React from 'react'
import { createContext,useState } from 'react'
export  const logincontext=createContext(null);
function Context({children}) {
    const [account,setAccount]=useState({
      Username:'',
      uid:'',
      email:''
    })
    const [cart,setCart]=useState([])
    const [details, setDetails] = useState([]);
    const [orders, setOrders] = useState([]);

  return (
    <logincontext.Provider
    value={{account,setAccount,cart,setCart,details,setDetails,orders,setOrders}}>
        {children}
    </logincontext.Provider>
  )
}
export default Context