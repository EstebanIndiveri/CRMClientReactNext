import React,{useReducer} from 'react';
import PedidoContext from './PedidoContext';
import PedidoReducer from './PedidoReducer';
import{
    SELECCIONAR_CLIENTE,
    CANTIDAD_PRODUCTOS,
    SELECCIONAR_PRODUCTO,
    ACTUALIZAR_TOTAL
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
        const agregarProducto=productosSeleccionados=>{

            let nuevoState;
            if(state.productos.length>0){
                //tomar del segundo arreglo, una copia para asignalo al primero
                nuevoState=productosSeleccionados.map(producto=>{
                    const nuevoObjeto=state.productos.find(productoState=>productoState.id===producto.id);
                    return{...producto,...nuevoObjeto};
                })

            }else{
                nuevoState=productosSeleccionados;
            }

            dispatch({
                type:SELECCIONAR_PRODUCTO,
                payload:nuevoState
            })
        }

        //modifica las cantidades de los productos:
        const cantidadProductos=nuevoProducto=>{
            dispatch({
                type:CANTIDAD_PRODUCTOS,
                payload:nuevoProducto
            })
        }
     

        const actualizarTotal=()=>{
            dispatch({
                type:ACTUALIZAR_TOTAL
            })
        }

        return(
            <PedidoContext.Provider
            value={{
                productos:state.productos,
                total:state.total,
                cliente:state.cliente,

                agregarCliente,
                agregarProducto,
                cantidadProductos,
                actualizarTotal
            }}
            >
                {children}
            </PedidoContext.Provider>
        )
    }
    export default PedidoState