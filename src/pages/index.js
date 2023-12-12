import { strMatched } from '@madup-inc/utils'
import axios from 'axios'
import { prop } from 'ramda'
import React from 'react'
import { DefaultLoading } from 'react-hook-loading'
import { Toaster } from 'react-hot-toast'
import GitmojiList from 'src/components/GitmojiList'
import SEO from 'src/components/SEO'
import gitmojis from 'src/data/gitmojis.json'
import { DATA_SOURCE_URL } from '../constants'

const Home = () => {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    if (strMatched(['development', 'production'], process.env.NODE_ENV)) {
      setList(gitmojis.gitmojis)
      return
    }
    axios
      .get(DATA_SOURCE_URL)
      .then(prop('data'))
      .then((res) => setList(res.gitmojis))
  }, [])

  if (list.length === 0) {
    return <DefaultLoading />
  }
  return (
    <>
      <SEO />
      <main>
        <GitmojiList gitmojis={list} />
        <Toaster />
      </main>
    </>
  )
}

export default Home
