import React, { Component } from "react";

export default class Serie extends Component {

  constructor (props) {
    super (props);
    this.state = {
      mySerieOrig: [],
      mySerie: []
    }
  }

  ordenar() {
    this.setState({
      mySerieOrig: this.state.mySerie.slice(),
      mySerie: this.state.mySerie.sort((a, b) => a - b )
    });
  }

  desordenar() {
    this.setState({
      mySerieOrig: this.state.mySerieOrig,
      mySerie: this.state.mySerieOrig.slice()
    });
  }

  obtieneSerie(mySerie) {
    this.setState({
      mySerieOrig: mySerie,
      mySerie: mySerie
    })
  }

  calcularSerie(numSerie) {
    const howMany = numSerie[0];
    const fromNum = numSerie[1];
    const toNum = numSerie[2];
    const mySerie = [];
    let myNum;
    if (howMany > 0 && fromNum < toNum) {
      let i = 1;
      do {
        myNum = Math.floor((Math.random() * toNum) + fromNum);
        if (!mySerie.includes(myNum)) {
          mySerie.push(myNum);
          i++;
        }
      }
      while (i <= howMany);
    }
    return mySerie;
  }

  componentDidMount () {
    if (this.props.onMounted) {
      this.props.onMounted({
        obtieneSerie: (mySerie) => this.obtieneSerie(mySerie),
        calcularSerie: (numSerie) => this.calcularSerie(numSerie)
      })
    }
  }

  render() {
    return (
      <React.Fragment>
      {this.state.mySerie.length > 0 &&
        <div className="serie"
        onMouseEnter={() => this.ordenar()}
        onMouseLeave={() => this.desordenar()}
        >
        <ol>
          {this.state.mySerie.map((x) => <li key={x}>{x}</li>)}
        </ol>
      </div>
      }
      </React.Fragment>
    );
  }
}