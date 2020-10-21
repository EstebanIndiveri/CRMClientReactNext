import React,{useState,useEffect} from 'react';
import Select from 'react-select';


const clientes = [
    { id: 1, nombre: 'Esteban' },
    { id: 2, nombre: 'Daniel' },
    { id: 3, nombre: 'Indi' }
  ]

  
const AsignarCliente = () => {



const[cliente,setCliente]=useState([]);

  useEffect(()=>{
      console.log(cliente);
  },[cliente])

  const seleccionarCliente=clientes=>{
    setCliente(clientes);
  }

    return ( 
        <Select
        options={clientes}
        isMulti={true}
        onChange={(option)=>seleccionarCliente(option)}
        getOptionValue={(options)=>options.id}
        getOptionLabel={options=>options.nombre}
        placeholder="Seleccione el cliente"
        noOptionsMessage={()=>'No hay resultados'}
        />
     );
}
 
export default AsignarCliente;