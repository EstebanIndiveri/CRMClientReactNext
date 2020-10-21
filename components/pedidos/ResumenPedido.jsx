import React, { Fragment,useContext,useState } from 'react';
import PedidoContext from '../../context/pedidos/PedidoContext';
import ProductoResumen from './ProductoResumen';

const ResumenPedido = () => {
    const pedidoContext = useContext(PedidoContext);

    const{productos}=pedidoContext;

    console.log(productos);

    return ( 
        <Fragment>
             <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold animate__animated animate__fadeIn animate__delay-2s">
                3.- Selecciona las cantidades del producto</p>
                {productos?.length>0?(
                    <>
                        {productos.map(producto=>(
                            <ProductoResumen
                            key={producto.id}
                            producto={producto}
                            />
                        ))}
                    </>
                 
                ):(
                    <p className="mt-5 text-sm animate__animated animate__fadeIn animate__delay-2s">Aún no hay Productos</p>
                )}
        </Fragment>
     );
}
 
export default ResumenPedido;