import React, { useContext } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProductos from '../components/pedidos/AsignarProductos';
import PedidoContext from '../context/pedidos/PedidoContext';

const NuevoPedido = () => {

    //utilizo context
    const pedidoContext=useContext(PedidoContext);


    return ( 
        <Layout>
        <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Crear Pedido</h1>
            <AsignarCliente/>
            <AsignarProductos/>
        </Layout>
     );
}
 
export default NuevoPedido;