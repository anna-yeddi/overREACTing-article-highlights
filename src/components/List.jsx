import React from 'react'
// import PropTypes from 'prop-types'
import Video from './Video'
import Article from './Article'

function List(props) {
  return props.list.map((item, i) => {
    switch (item.type) {
      case 'video':
        return <Video {...item} key={i} />

      case 'article':
        return <Article {...item} key={i} />
    }
  })
}

// List.propTypes = {}

export default List
