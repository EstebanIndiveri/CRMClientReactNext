import{
    SELECCIONAR_CLIENTE,
    CANTIDAD_PRODUCTOS,
    SELECCIONAR_PRODUCTO
    }from'../../types';


export default(state,action)=>{
    switch (action.type) {
        case SELECCIONAR_CLIENTE:
            return{
                ...state,
                cliente:action.payload
            }
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                productos:action.payload
            }
        default:
            return state
    }
}