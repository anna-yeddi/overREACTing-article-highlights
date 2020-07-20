import React from 'react'
import PropTypes from 'prop-types'

function Article(props) {
  return (
    <div className="item item-article">
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <p className="views">{props.views} Reads</p>
    </div>
  )
}

Article.propTypes = {
  props: PropTypes.objectOf({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
  }),
}

export default Article
