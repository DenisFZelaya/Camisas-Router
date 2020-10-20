import React from "react";
import { Link } from "react-router-dom";

class Producto extends React.Component {
  render() {
    const { imagen, nombre, precio, id } = this.props.informacion;

    console.log(id);
    return (
      <li>
        <img src={`img/${imagen}.png`} alt={imagen} />
        <p>
          {nombre} <span> $ {precio} </span>
        </p>
        <Link to={`/producto/${id}`}>Mas informacion</Link>
      </li>
    );
  }
}

export default Producto;
