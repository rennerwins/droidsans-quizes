import React from 'react';
import PropTypes from 'prop-types'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = ({ buttonText, title, getStarted }) => {
  // const getStart = () => {
  //   getStarted()
  // }

  return (
    <section className="hero is-info is-fullheight is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img className="moving-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Android_robot.png" alt="android" />
          <h1 className="title is-2 has-text-centered animated fadeInDown">
            {title}
          </h1>
            <Link 
              to="/participants" 
              // onClick={getStart}
              className="button is-info is-inverted is-outlined animated fadeInUp">
              {buttonText}
            </Link>
          
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
