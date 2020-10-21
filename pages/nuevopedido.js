import React,{useState,useEffect} from 'react';
import Layout from '../components/Layout';
import Select from 'react-select';

const options = [
    { id: 'chocolate', nombre: 'Chocolate' },
    { id: 'strawberry', nombre: 'Strawberry' },
    { id: 'vanilla', nombre: 'Vanilla' }
  ]


const NuevoPedido = () => {


    const[sabores,setSabores]=useState([]);

    useEffect(()=>{
        console.log(sabores);
    },[sabores])

    const seleccionarSabor=sabores=>{
        setSabores(sabores);
    }

    return ( 
        <Layout>
        <h1 className="text-2xl text-gray-800 font-light animate__animated animate__fadeIn animate__delay-1s">Crear Pedido</h1>
        <Select
        options={options}
        isMulti={true}
        onChange={(option)=>seleccionarSabor(option)}
        getOptionValue={(options)=>options.id}
        getOptionLabel={options=>options.nombre}
        placeholder="Seleccione el sabor"
        noOptionsMessage={()=>'No hay resultados'}
        />
        </Layout>
     );
}
 
export default NuevoPedido;