import React, { Component } from "react";

import logoPrimitiva from './assets/primitiva.jpg';
import logoEuromillones from './assets/euromillones.jpg';
import logoGordoPrimitiva from './assets/gordoPrimitiva.jpg';
import logoBonoLoto from './assets/bonoloto.jpg';

import Logo from './logo.js';

export default class Loterias extends Component {

  render() {
    return (
      <div id="contenedor">

      <fieldset className="Primitiva">
        <Logo numSerie1={[6,1,49]}
          nomSerie1="Primitiva"
          numSerie2={[1,0,9]}
          nomSerie2="Reintegro:"
          logo={logoPrimitiva}
        />
      </fieldset>

      <fieldset className="Euromillones">
        <Logo numSerie1={[5,1,50]}
          nomSerie1="Euromillones"
          numSerie2={[2,1,12]}
          nomSerie2="Estrellas:"
          logo={logoEuromillones} />
      </fieldset>

      <fieldset className="GordoPrimitiva">
        <Logo numSerie1={[5,1,54]}
          nomSerie1="GordoPrimitiva"
          numSerie2={[1,0,9]}
          nomSerie2="Clave:"
          logo={logoGordoPrimitiva} />
      </fieldset>

      <fieldset className="BonoLoto">
        <Logo numSerie1={[6,1,49]}
          nomSerie1="BonoLoto"
          numSerie2={[1,0,9]}
          nomSerie2="Reintegro:"
          logo={logoBonoLoto} />
      </fieldset>

    </div>

    );
  }
}