import React,{useEffect} from 'react';
import Layout from '../components/Layout';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import{gql,useQuery}from '@apollo/client';

const MEJORES_CLIENTES=gql`
    query mejoresClientes{
        mejoresClientes{
            cliente{
            nombre
            empresa
            }
            total
        }
    }
`;



const Mejoresclientes = () => {
    const{data,loading,error,startPolling,stopPolling}=useQuery(MEJORES_CLIENTES);

    useEffect(()=>{
        startPolling(1000);
        return()=>{
            stopPolling();
        }

    },[startPolling,stopPolling])

    if(loading || !data)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    // console.log(data.mejoresVendedores);
    const{mejoresClientes}=data;
    const clienteGrafica=[];
    mejoresClientes.map((cliente,index)=>{
        clienteGrafica[index]={
            ...cliente.cliente[0],
            total:cliente.total
        }
    })

    console.log(clienteGrafica);
    return ( 
        <Layout>
            <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-2s">Mejores Vendedores</h1>

            <BarChart
            className="mt-5 mx-auto"
            width={600}
            height={460}
            data={clienteGrafica}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#3182ce" />
        </BarChart>


        </Layout>
        
     );
}
 
export default Mejoresclientes;