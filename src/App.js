import React, { useState } from 'react'
import './App.css'
import List from './components/List'

export default function App() {
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

  return (
    <div>
      <h1>Highlighted Article Collection</h1>
      <div id="root-articles">
        <List list={list} />
      </div>
    </div>
  )
}
