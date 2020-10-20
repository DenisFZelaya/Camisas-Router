import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Productos from "./Productos";
import Nosotros from "./Nosotros";
import Error from "./Error";
import infoProductos from "../datos/datos.json";
import Header from "./Header";
import SingleProducto from "../componentes/SingleProducto";
import Navegacion from "./Navegacion";
import Contacto from "./Contacto";

export default class Router extends Component {
  state = {
    productos: [],
    terminoBusqueda: "",
  };

  componentWillMount() {
    this.setState({
      productos: infoProductos,
    });
  }

  busquedaProducto = (busqueda) => {
    this.setState({
      terminoBusqueda: busqueda,
    });

    console.log("this.state.terminoBusqueda");
    console.log(this.state.terminoBusqueda);
    console.log(busqueda);
  };

  render() {
    let productos = [...this.state.productos];
    let busqueda = this.state.terminoBusqueda;
    let resultado;

    if (busqueda !== "") {
      resultado = productos.filter(producto => (
        producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase()) !== -1
      ))
    } else {
      resultado = productos;
    }

    console.log(this.state);
    return (
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Productos
                  productos={resultado}
                  busquedaProducto={this.busquedaProducto}
                />
              )}
            />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route
              exact
              path="/productos"
              render={() => (
                <Productos
                productos={resultado}
                busquedaProducto={this.busquedaProducto}
                />
              )}
            />

            <Route
              exact
              path="/producto/:productoId"
              render={(props) => {
                let idProducto = props.location.pathname.replace(
                  "/producto/",
                  ""
                );
                return (
                  <SingleProducto producto={this.state.productos[idProducto]} />
                );
              }}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
