import React from 'react'
import PropTypes from 'prop-types'

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        title={`4K Video published with ${props.views} views`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
      <p className="views">{props.views} Views</p>
    </div>
  )
}

Video.propTypes = {
  props: PropTypes.objectOf({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }),
}

export default Video
