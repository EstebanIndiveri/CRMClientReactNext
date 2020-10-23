import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import {gql,useQuery} from '@apollo/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cliente from '../components/Cliente';

const OBTENER_CLIENTES_USUARIO=gql`
  query obtenerClientesVendedor{
  obtenerClientesVendedor{
    id
    nombre
    apellido
    email
    empresa
  }
}
`;

export default function Home() {
  const router=useRouter();
  //apollo
  const{data,loading,error}=useQuery(OBTENER_CLIENTES_USUARIO);

  // console.log(data);
    if(loading)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    // console.log(loading);

    // if(!data.obtenerClientesVendedor) return router.push('/login')
    if(data.obtenerClientesVendedor==undefined ||data.obtenerClientesVendedor==null ) return window.location.href='http://localhost:3000/login';

  return (
    <Layout>
      
      <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Clientes</h1>
      <Link href="/nuevocliente">
        <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white
        rounded text-sm hover:bg-gray-600 mb-3 uppercase font-bold shadow-md transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s w-full lg:w-auto text-center">Nuevo Cliente</a>
      </Link>
      {data.obtenerClientesVendedor.length===0 ? (<><h1 className="text-3xl animate__animated animate__fadeIn animate__delay-1s">No tienes clientes todavía</h1><br/>
      <p className=" text-2xl  text-center animate__animated animate__fadeIn animate__delay-2s">¡Vamos a realizar ventas!</p>
      </>)
      :(
        <Fragment>
          <div className="overflow-x-scroll lg:overflow-hidden"> 
        <table className="table-auto shadow-md mt-10 w-full w-lg animate__animated animate__fadeIn animate__delay-2s ">
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">nombre</th>
            <th className="w-1/5 py-2">Empresa</th>
            <th className="w-1/5 py-2">Email</th>
            <th className="w-1/5 py-2">Eliminar</th>
            <th className="w-1/5 py-2">Editar</th>


          </tr>
        </thead>
        <tbody className="bg-white">
          {data.obtenerClientesVendedor.map(cliente=>(
            <Cliente
            key={cliente.id}
            cliente={cliente}
            />
          ))}
        </tbody>
      </table>
      </div>
      </Fragment>
      )
      }

     
    </Layout>
  )
}
