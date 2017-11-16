import PropTypes from 'prop-types'
import React from 'react'

export const Box = ({title, counter, inc, dec}) => (
  <div>
    <h1>{title}</h1>
    <div>
      <button onClick={dec}>-</button>
      <span>{counter}</span>
      <button onClick={inc}>+</button>
    </div>
  </div>
)

Box.propTypes = {
  title: PropTypes.string,
  counter: PropTypes.number.isRequired,
  dec: PropTypes.func.isRequired,
  inc: PropTypes.func.isRequired
}

Box.defaultProps = {
  title: 'Title'
}
