import React, { Fragment,useEffect,useContext,useState } from 'react';
import Select from 'react-select';
import{gql,useQuery} from '@apollo/client';
import PedidoContext from '../../context/pedidos/PedidoContext';

const OBTENER_PRODUCTOS=gql`
    query obtenerProductos{
        obtenerProductos{
            id
            nombre
            precio
            existencia
        }
    }
`;

const AsignarProductos = () => {
    //state local del componente 
    const[productos,setProductos]=useState([]);

    const pedidoContext=useContext(PedidoContext);

    const{agregarProducto}=pedidoContext;
    // console.log(agregarProducto);

    //consulta DB:
    const{data,loading,error}=useQuery(OBTENER_PRODUCTOS);

    useEffect(()=>{
        //function pedidostate.
        agregarProducto(productos);
    },[productos])

    const seleccionarProducto=(producto)=>{
        setProductos(producto);
    }

    if(loading || !data || data===undefined || data===null)return null;

    const {obtenerProductos}=data;

    return ( 
        <Fragment>
            <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold ">
                2.- Selecciona los producto al pedido</p>
            <Select
            className="mt-3"
            options={obtenerProductos}
            isMulti={true}
            onChange={(option)=>seleccionarProducto(option)}
            getOptionValue={(options)=>options.id}
            getOptionLabel={options=>`${options.nombre} - ${options.existencia} Disponibles`}
            placeholder="Selecciona los productos"
            noOptionsMessage={()=>'No hay resultados'}
            />
        </Fragment>
     );
}
 
export default AsignarProductos;