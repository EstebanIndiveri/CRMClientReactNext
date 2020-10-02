import React from 'react';
import Layout from '../components/Layout';
import {gql,useQuery} from '@apollo/client';

const OBTENER_CLIENTES_USUARIO=gql`
  query obtenerClientesVendedor{
  obtenerClientesVendedor{
    nombre
    apellido
    email
    empresa
  }
}
`;

export default function Home() {

  //apollo
  const{data,loading,error}=useQuery(OBTENER_CLIENTES_USUARIO);

  console.log(data);
    if(loading)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    // console.log(loading);
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Clientes</h1>
      {data.obtenerClientesVendedor.length===0 ? (<><h1 className="text-3xl animate__animated animate__fadeIn animate__delay-1s">No tienes clientes todavía</h1><br/>
      <p className=" text-2xl  text-center animate__animated animate__fadeIn animate__delay-2s">¡Vamos a realizar ventas!</p>
      </>)
      :(
        <table className="table-auto shadow-md mt-10 w-full w-lg animate__animated animate__fadeIn animate__delay-2s">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">nombre</th>
            <th className="w-1/5 py-2">Empresa</th>
            <th className="w-1/5 py-2">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.obtenerClientesVendedor.map(cliente=>(
            <tr key={cliente.id}>
              <td className="border px-4 py-2"> {cliente.nombre} {cliente.apellido}</td>
              <td className="border px-4 py-2"> {cliente.empresa} </td>
              <td className="border px-4 py-2"> {cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )
      }

     
    </Layout>
  )
}
