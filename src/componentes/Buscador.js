import React, { Component } from 'react';
import '../css/Buscador.css';

export default class Buscador extends Component {

leerDatos= (e) => {
    const termino = e.target.value;

    //Enviar a props
    console.log(termino);
    this.props.busquedaProducto(termino);
}

    render() {
        return (
            <div>
                <form className='buscador'>
                    <input type='text' placeholder='Buscar' onChange={this.leerDatos}/>
                </form>
            </div>
        )
    }
}
