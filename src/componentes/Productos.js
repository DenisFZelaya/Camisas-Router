import React, { Component } from 'react';
import Producto from './Producto';
import '../css/Productos.css';
import Buscador from './Buscador';

class Productos extends Component {
    render() { 
        
        return (  
            <div className='productos'>
                <h2>Nuestros Productos</h2>
                <ul className='lista-productos'>
                    <Buscador 
                        busquedaProducto = {this.props.busquedaProducto}
                    />
                    {Object.keys(this.props.productos).map(
                        producto => (<Producto 
                            informacion = {this.props.productos[producto]}
                            key={producto}
                        />)
                    )}
                </ul>
            </div>
        );
    }
}
 
export default Productos;