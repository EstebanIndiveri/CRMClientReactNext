import React from 'react';
import {gql,useQuery} from '@apollo/client';
import { useRouter } from 'next/router';

const OBTENER_USUARIO=gql`
    query obtenerUsuario{
        obtenerUsuario{
            id
            nombre
            apellido
        }
    }
`;

const Header = () => {

    const router=useRouter();
    //query apollo
    const{data,loading,error}=useQuery(OBTENER_USUARIO);
    // console.log(data);
 
    if(loading)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    if(!data) return router.push('/login')
   //nodata antes del result
   const{nombre,apellido}=data.obtenerUsuario;

   const cerraSesion=()=>{
       localStorage.removeItem('token');
       router.push('/login');
   }

    return ( 
    <div className="flex justify-between mb-6">

        <p className="mr-2">Hola: {nombre} {apellido}</p> 

        <button
        onClick={()=>cerraSesion()}
        type="button"
        className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-lg hover:bg-red-400 transition duration-500 ease-in-out"
        >
            Cerrar sesión
        </button>
    </div>
    
    );
}
 
export default Header;