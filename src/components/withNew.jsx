import React from 'react'
// import PropTypes from 'prop-types'

function withNew(Component) {
  return function (props, ...args) {
    console.log('With New-ed!')
    return Component.apply(this, [props, ...args])
  }
}

// withNew.propTypes = {

// }

export default withNew
