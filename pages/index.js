import React from 'react';
import Layout from '../components/Layout';
import {gql,useQuery} from '@apollo/client';

const OBTENER_CLIENTES_USUARIO=gql`
  query obtenerClientes{
    obtenerClientes{
      nombre
      email
      empresa
    }
  }
`;

export default function Home() {

  //apollo
  const{data,loading,error}=useQuery(OBTENER_CLIENTES_USUARIO);

  // console.log(data);
    if(loading)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    // console.log(loading);
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Clientes</h1>
    </Layout>
  )
}
