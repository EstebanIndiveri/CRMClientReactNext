import React, { Fragment,useContext,useEffect,useState } from 'react'
import PedidoContext from '../../context/pedidos/PedidoContext';

const ProductoResumen = ({producto}) => {

    const{nombre,precio}=producto;

    const pedidoContext = useContext(PedidoContext);
    const{cantidadProductos}=pedidoContext;

    const [cantidad,setCantidad]=useState(0);

    useEffect(()=>{
        actualizarCantidad();
    },[cantidad])

    const actualizarCantidad=()=>{
        const nuevoProducto={...producto,cantidad:Number(cantidad)}
        cantidadProductos(nuevoProducto);
    }


    return ( 
        <Fragment>
            <div className="md:flex md:justify-between md:items-center mt-5 animate__animated animate__fadeIn ">
                <div className="md:w-2/4 mb-2 md:mb-0">
                    <p className="text-sm">{nombre}</p>
                    <p className="text-sm">$ {precio}</p>

                </div>
                <input
                type="number"
                placeholder="cantidad"
                className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:ml-4"
                value={cantidad}
                onChange={(e)=>setCantidad(e.target.value)}
                />
            </div>
        </Fragment>
     );
}
 
export default ProductoResumen;