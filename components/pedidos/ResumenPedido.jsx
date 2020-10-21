import React, { Fragment,useContext,useState } from 'react';
import PedidoContext from '../../context/pedidos/PedidoContext';


const ResumenPedido = () => {
    const pedidoContext = useContext(PedidoContext);

    const{productos}=pedidoContext;

    console.log(productos);

    return ( 
        <Fragment>
             <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
                3.- Selecciona las cantidades del producto</p>
                {productos?.length>0?(
                    <p>Si hay productos</p>
                ):(
                    <p className="mt-5 text-sm">Aún no hay</p>
                )}
        </Fragment>
     );
}
 
export default ResumenPedido;