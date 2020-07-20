import React from 'react'
// import PropTypes from 'prop-types'

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      <p className="views">{props.views} Views</p>
    </div>
  )
}

// Video.propTypes = {}

export default Video
