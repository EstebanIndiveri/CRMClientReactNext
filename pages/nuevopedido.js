import React, { useContext } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProductos from '../components/pedidos/AsignarProductos';
import ResumenPedido from '../components/pedidos/ResumenPedido';
import Total from '../components/pedidos/Total';
import PedidoContext from '../context/pedidos/PedidoContext';

const NuevoPedido = () => {

    //utilizo context
    const pedidoContext=useContext(PedidoContext);


    return ( 
        <Layout>
        <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Crear Pedido</h1>
        <div className="flex justify-center mt-5 animate__animated animate__fadeIn animate__delay-2s">
            <div className="w-full max-w-lg">
                <AsignarCliente/>
                <AsignarProductos/>
                <ResumenPedido/>
                <Total/>
                <button
                type="button"
                className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 transition-all duration-500 ease-in-out`}
                >Registrar Pedido</button>
            </div>
        </div>
          
        </Layout>
     );
}
 
export default NuevoPedido;