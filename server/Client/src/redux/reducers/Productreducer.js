

export const getProductReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case 'success':
            return { products: action.payload }
        case 'fail':
            return { error: action.payload }
        default:
            return state
    }
}
export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch (action.type) {
        case 'Getsuccess':
            return { product: action.payload }
        case 'Getfail':
            return { error: action.payload }
        default:
            return state
    }
}
export const getOrderDetailReducer=(state={product:{}},action)=>{
    switch (action.type) {
        case 'Getsuccess1':
            return { product: action.payload }
        case 'Getfail1':
            return { error: action.payload }
        default:
            return state
    }
}
