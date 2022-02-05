import React, { Component } from "react";
import Serie from "./serie";
import Serie2 from "./serie2";

export default class Logo extends Component {

  serie2Mounted(callbacks) {
    this.serie2Callbacks = callbacks;
  }

  serieMounted(callbacks) {
    this.serieCallbacks = callbacks;
  }

  calcularSeries(numSerie1, numSerie2) {
    const mySerie = this.serieCallbacks.calcularSerie(numSerie1);
    const mySerie2 = this.serieCallbacks.calcularSerie(numSerie2);
    this.serieCallbacks.obtieneSerie(mySerie);
    this.serie2Callbacks.obtieneSerie(mySerie2);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.calcularSeries(this.props.numSerie1, this.props.numSerie2)}>
          <img src={this.props.logo} className="App-logo" alt="Logo Juego" />
        </button>
        <Serie onMounted={callbacks => this.serieMounted(callbacks)} />
        <Serie2 onMounted={callbacks => this.serie2Mounted(callbacks)} nomSerie2={this.props.nomSerie2}/>
      </React.Fragment>
    );
  }
}