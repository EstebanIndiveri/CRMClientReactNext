import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import{gql,useQuery}from'@apollo/client';
import Pedido from '../components/Pedido';

const OBTENER_PEDIDOS=gql`

query obtenerPedidosVendedor{
  obtenerPedidosVendedor{
    id
    pedido{
      id
      cantidad
      nombre
    }
    cliente{
      id
      nombre
      apellido
      email
      telefono
    }
    vendedor
    total
    estado
  }
}
`

const Pedidos = () => {

    const{data,loading,error}=useQuery(OBTENER_PEDIDOS);
    if(loading || !data || data===undefined || data===null)return (<div style={{height:'50vh',zIndex:1,opacity:0.7}} className="loader  animate__animated animate__fadeIn"></div>)
    const{obtenerPedidosVendedor}=data;
    console.log(obtenerPedidosVendedor);
    return ( 
        <div>
            <Layout>
            <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-2s">Pedidos</h1>

            <Link href="/nuevopedido">
                <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white
                rounded text-sm hover:bg-gray-600 mb-3 uppercase font-bold shadow-md transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
                Nuevo Pedido
                </a>
            </Link>
            {obtenerPedidosVendedor.length===0?(
                <p className="mt-5 text-center text-2xl animate__animated animate__fadeIn animate__delay-3s">No hay pedidos aún</p>
            ):(
                obtenerPedidosVendedor.map((pedido)=>(
                  <Pedido
                  key={pedido.id}
                  pedido={pedido}
                  />
                ))
            )}
            </Layout>
        </div>
        );
}
 
export default Pedidos;