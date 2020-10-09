import React from 'react';
import Layout from '../components/Layout';
import {gql,useQuery} from'@apollo/client';
import Producto from '../components/Producto';

const OBTENER_PRODUCTS=gql`
    query obtenerProductos{
        obtenerProductos{
            id
            nombre
            precio
            existencia
        }
    }
`;

const Productos = () => {

    //conusltar productos
    const{data,loading,error}=useQuery(OBTENER_PRODUCTS);
    console.log(data);

    if(loading)return (<div style={{height:'100vh',zIndex:1,opacity:0.7}} className="loader h-screen w-screen animate__animated animate__fadeIn"></div>)
    
    return ( 
        <div>
            <Layout>
            <h1 className="text-2xl text-gray-800 font-light">Productos</h1>

            <table className="table-auto shadow-md mt-10 w-full w-lg animate__animated animate__fadeIn animate__delay-2s ">
                <thead className="bg-gray-800">
                <tr className="text-white">
                    <th className="w-1/5 py-2">nombre</th>
                    <th className="w-1/5 py-2">Existencia</th>
                    <th className="w-1/5 py-2">Precio</th>
                    <th className="w-1/5 py-2">Eliminar</th>
                    <th className="w-1/5 py-2">Editar</th>


                </tr>
                </thead>
                <tbody className="bg-white">
                {data.obtenerProductos.map(producto=>(
                    <Producto
                    key={producto.id}
                    producto={producto}
                    />
                ))}
                </tbody>
            </table>
            </Layout>
        </div>
        );
}
 
export default Productos;