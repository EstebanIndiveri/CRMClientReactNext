import React,{useState,useEffect, Fragment, useContext} from 'react';
import Select from 'react-select';
import {gql,useQuery} from '@apollo/client'
import PedidoContext from '../../context/pedidos/PedidoContext';

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
  
const AsignarCliente = () => {

  const[cliente,setCliente]=useState([]);

  const pedidoContext=useContext(PedidoContext);

  const {agregarCliente}=pedidoContext;
  // console.log(agregarCliente);

  //consultar DB:
  const {data,loading,error}=useQuery(OBTENER_CLIENTES_USUARIO);
  // console.log(data);

  useEffect(()=>{
    agregarCliente(cliente);
  },[cliente])

  const seleccionarCliente=clientes=>{
    setCliente(clientes);
  }

  if(loading || !data || data===undefined || data===null)return (<div style={{height:'50vh',zIndex:1,opacity:0.7}} className="loader  animate__animated animate__fadeIn"></div>)

  const {obtenerClientesVendedor}=data;

    return ( 
      <Fragment>
        <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">1.- Asigna un cliente al pedido</p>
        <Select
        className="mt-3"
        options={obtenerClientesVendedor}
        // isMulti={true}
        onChange={(option)=>seleccionarCliente(option)}
        getOptionValue={(options)=>options.id}
        getOptionLabel={options=>options.nombre}
        placeholder="Seleccione el cliente"
        noOptionsMessage={()=>'No hay resultados'}
        />
        </Fragment>
     );
}
 
export default AsignarCliente;