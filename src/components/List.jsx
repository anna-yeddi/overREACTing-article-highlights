import React from 'react'
import PropTypes from 'prop-types'
import withHighlight from './withHighlight'
import withType from './withType'

function List(props) {
  // Needed component will be selected by withType HOC
  // depending on item.type and then
  // highlighted, if needed, by withHighlight HOC
  const HighlightedComponent = withHighlight(withType())

  return props.list.map((item, i) => {
    return <HighlightedComponent {...item} key={i} />
  })
}

List.propTypes = {
  props: PropTypes.objectOf({
    list: PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
    }).isRequired,
  }),
}

export default List
