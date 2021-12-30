import React from 'react'
// import gitmojis from 'src/data/gitmojis.json'
import GitmojiList from 'src/components/GitmojiList'
import SEO from 'src/components/SEO'
import axios from 'axios'
import { prop } from 'ramda'
import { DefaultLoading } from 'react-hook-loading'

const Home = () => {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/madup-inc/chapter-frontend/master/template/gitmoji.json?token=ABOJUXFH552LJHCKIXWDKCDB22JNC'
      )
      .then(prop('data'))
      .then((list) => setList(list))
  }, [])

  if (list.length === 0) {
    return <DefaultLoading />
  }
  return (
    <>
      <SEO />
      <main>
        <GitmojiList gitmojis={list} />
      </main>
    </>
  )
}

export default Home
