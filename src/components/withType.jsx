import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'
import Article from './Article'

export default () => {
  const withType = ({ ...props }) => {
    return (
      <>
        {
          // Use enums to conditionally render needed type of component
          {
            video: <Video {...props} />,
            article: <Article {...props} />,
          }[props.type]
        }
      </>
    )
  }

  withType.propTypes = {
    props: PropTypes.objectOf({
      list: PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        views: PropTypes.number.isRequired,
      }).isRequired,
    }),
  }

  return withType
}
