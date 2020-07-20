import React from 'react'
// import PropTypes from 'prop-types'
import Video from './Video'
import Article from './Article'
import withHighlight from './withHighlight'

function List(props) {
  const HighlightedComponentVideo = withHighlight(Video)
  const HighlightedComponentArticle = withHighlight(Article)

  return props.list.map((item, i) => {
    switch (item.type) {
      case 'video':
        return <HighlightedComponentVideo {...item} key={i} />

      case 'article':
        return <HighlightedComponentArticle {...item} key={i} />
    }
    // return <HighlightedComponent {...item} key={i} />
  })
}

// List.propTypes = {}

export default List
