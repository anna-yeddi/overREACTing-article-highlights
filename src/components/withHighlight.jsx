import React from 'react'
// import PropTypes from 'prop-types'
import New from './New'
import Popular from './Popular'

function withHighlight(WrappedComponent) {
  return function (props, ...args) {
    if (props.views >= 1000) {
      // Wrap in a Popular component if a 1000 or more views
      return <Popular>{WrappedComponent.apply(this, [props, ...args])}</Popular>
    } else if (props.views < 100) {
      // Wrap in a New component if less than 100 views
      return <New>{WrappedComponent.apply(this, [props, ...args])}</New>
    } else {
      // Do not wrap for 100-999 views
      return WrappedComponent.apply(this, [props, ...args])
    }
  }
}

// withHighlight.propTypes = {

// }

export default withHighlight
