import React, { useState } from 'react'
import './App.css'

export default function App() {
  function New(props) {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        {props.children}
      </div>
    )
  }

  function Popular(props) {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {props.children}
      </div>
    )
  }

  function Article(props) {
    return (
      <div className="item item-article">
        <h3>
          <a href="#">{props.title}</a>
        </h3>
        <p className="views">Прочтений: {props.views}</p>
      </div>
    )
  }

  function Video(props) {
    return (
      <div className="item item-video">
        <iframe
          src={props.url}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
        <p className="views">Просмотров: {props.views}</p>
      </div>
    )
  }

  function List(props) {
    return props.list.map((item) => {
      switch (item.type) {
        case 'video':
          return <Video {...item} />

        case 'article':
          return <Article {...item} />
      }
    })
  }

  // ToDo: Update  URLs to YouTube API to be able to fetch title data
  // for iframe elements and their a11y
  const [list, setList] = useState([
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      views: 50,
    },
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      views: 12,
    },
    {
      type: 'article',
      title: 'Police Break Up Cat Party...',
      views: 175,
    },
    {
      type: 'article',
      title:
        'Koala Escapes At Zoo, Falls Asleep Before He Can Do Anything Interesting...',
      views: 1532,
    },
    {
      type: 'video',
      url:
        'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0;&cc_load_policy=1',
      views: 4253,
    },
    {
      type: 'article',
      title: 'Mugged By A Parrot!',
      views: 12,
    },
  ])

  return <List list={list} />
}
