import React from 'react'


const Producto = ({producto}) => {
    const{nombre}=producto
    return ( 
        <h1>{nombre}</h1>
        <p>test</p>
     );
}
 
export default Producto;