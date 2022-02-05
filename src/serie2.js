import React, { Component } from "react";

export default class Serie2 extends Component {

  constructor (props) {
    super (props);
    this.state = {
      mySerie: []
    }
  }

  componentDidMount () {
    if (this.props.onMounted) {
      this.props.onMounted({
        obtieneSerie: (mySerie) => this.obtieneSerie(mySerie),
      })
    }
  }

  obtieneSerie(mySerie) {
    this.setState({
      mySerie: mySerie
    })
  }

  render() {
    return (
      <React.Fragment>
        <p>
          {this.state.mySerie.length > 0 && this.props.nomSerie2}
        </p>
        <ol className="serie2">
          {this.state.mySerie.map((x) => <li key={x}>{x}</li>)}
        </ol>
      </React.Fragment>
    );
  }
}