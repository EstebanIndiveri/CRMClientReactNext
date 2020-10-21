import React from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';

const NuevoPedido = () => {

    return ( 
        <Layout>
        <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Crear Pedido</h1>
            <AsignarCliente/>

        </Layout>
     );
}
 
export default NuevoPedido;