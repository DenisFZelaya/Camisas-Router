import React, { Component } from 'react'
import '../css/Navegacion.css';
import { NavLink } from 'react-router-dom';

export default class Navegacion extends Component {
    render() {
        return (
            <nav className='navegacion'>
                <NavLink to={'/nosotros'} activeClassName='activo'>Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName='activo'>Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName='activo'>Contacto</NavLink>
            </nav>
        )
    }
}
