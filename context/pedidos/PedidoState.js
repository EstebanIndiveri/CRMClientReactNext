import React,{useReducer} from 'react';
import PedidoContext from './PedidoContext';
import PedidoReducer from './PedidoReducer';
import{
    SELECCIONAR_CLIENTE,
    CANTIDAD_PRODUCTOS,
    SELECCIONAR_PRODUCTO
    }from'../../types';

    const PedidoState=({children})=>{
        //state de pedidos
        const initalState={
            cliente:{},
            productos:[],
            total:0
        };

        const[state,dispatch]=useReducer(PedidoReducer,initalState);

        //modifica el Cliente
        const agregarCliente=cliente=>{
            // console.log(cliente);
            dispatch({
                type:SELECCIONAR_CLIENTE,
                payload:cliente
            })
        };

        //modifica productos
        const agregarProducto=productos=>{
            dispatch({
                type:SELECCIONAR_PRODUCTO,
                payload:productos
            })
        }
     

        return(
            <PedidoContext.Provider
            value={{
                productos:state.productos,
                agregarCliente,
                agregarProducto
            }}
            >
                {children}
            </PedidoContext.Provider>
        )
    }
    export default PedidoState