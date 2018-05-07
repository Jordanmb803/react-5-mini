import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { increment_num, decrement_num } from './ducks/counter';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ this.props.number }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => this.props.increment_num(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => this.props.increment_num(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => this.props.decrement_num(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => this.props.decrement_num(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    number: state.num
  }
}

let actions = {
  increment_num,
  decrement_num
}

export default connect(mapStateToProps, actions)(App);
