import React, { Component } from 'react';

class Hero extends Component {
  getStarted() {
    this.props.getStarted()
  }

  render() {
    return (
      <section className="hero is-info is-fullheight is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-centered animated fadeInDown">
              Untitled
            </h1>
            <a 
              onClick={this.getStarted.bind(this)}
              className="button is-info is-inverted is-outlined animated fadeInUp">
              Get Started
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default Hero;
