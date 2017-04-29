import React from 'react';
import PropTypes from 'prop-types'

const Hero = ({ buttonText, title, getStarted }) => {
  const getStart = () => {
    getStarted()
  }

  return (
    <section className="hero is-info is-fullheight is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-2 has-text-centered animated fadeInDown">
            {title}
          </h1>
          <a 
            onClick={getStart}
            className="button is-info is-inverted is-outlined animated fadeInUp">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  buttonText: PropTypes.string,
  title: PropTypes.string,
  getStarted: PropTypes.func
}

export default Hero
