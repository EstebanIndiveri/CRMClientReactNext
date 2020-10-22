import React, { useContext,useState } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProductos from '../components/pedidos/AsignarProductos';
import ResumenPedido from '../components/pedidos/ResumenPedido';
import Total from '../components/pedidos/Total';
import PedidoContext from '../context/pedidos/PedidoContext';
import {gql,useMutation} from '@apollo/client';
import {useRouter} from 'next/router'
import Swal from 'sweetalert2';

    const NUEVO_PEDIDO=gql`
    mutation nuevoPedido($input:PedidoInput){
        nuevoPedido(input:$input){
            id
        }
    }
    `

const NuevoPedido = () => {
    const router=useRouter();
    const[mensaje,setMensaje]=useState(null);
    //utilizo context
    const pedidoContext=useContext(PedidoContext);

    //mutation nuevo peddido

    const[nuevoPedido]=useMutation(NUEVO_PEDIDO);

    const{cliente,productos,total}=pedidoContext;

    const validarPedido=()=>{
        return !productos.every(producto=>producto.cantidad>0) || total === 0  || cliente.length===0 ? ' opacity-50 cursor-not-allowed ':'' ; 
    }
    const crearNuevoPedido=async ()=>{
        const{id}=cliente;

        //quita data innecesaria de producto.
        const pedido=productos.map(({existencia,__typename,...producto})=>producto)
        // console.log(pedido);

        try {
            const{data}=await nuevoPedido({
                variables:{
                    input:{
                        cliente:id,
                        total,
                        pedido
                    }

                }
            })
            // console.log(data);

            //redirect
            router.push('/pedidos');
            //Alerta

            Swal.fire(
                'Correcto',
                'El pedido se registro correctamente',
                'success'
            )
        } catch (error) {
            setMensaje(error.message.replace('GraphQL error: ',''));

            setTimeout(() => {
                setMensaje(null)
            }, 5000);
        }
    }
    const mostrarMensaje=()=>{
        return(
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto animate__animated animate__fadeIn animate__slow	">
                <p>{mensaje}</p>
            </div>
        )
    }

    return ( 
        <Layout>
        <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Crear Pedido</h1>
        {mensaje&&mostrarMensaje()}
        <div className="flex justify-center mt-5 animate__animated animate__fadeIn animate__delay-2s">
            <div className="w-full max-w-lg">
                <AsignarCliente/>
                <AsignarProductos/>
                <ResumenPedido/>
                <Total/>
                <button
                type="button"
                className={`bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 transition-all duration-500 ease-in-out ${validarPedido()}`}
                onClick={()=>crearNuevoPedido()}
                >Registrar Pedido</button>
            </div>
        </div>
          
        </Layout>
     );
}
 
export default NuevoPedido;