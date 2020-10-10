import React from 'react'


const Producto = ({producto}) => {
    const{nombre}=producto
    console.log();
    return ( <div>
        <h1>{nombre}</h1>
        <p>test</p>
        </div>
     );
}
 
export default Producto;