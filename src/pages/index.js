import React from 'react'
import gitmojis from 'src/data/gitmojis.json'
import GitmojiList from 'src/components/GitmojiList'
import SEO from 'src/components/SEO'

const Home = () => (
  <>
    <SEO />
    <main>
      <GitmojiList gitmojis={gitmojis.gitmojis} />
    </main>
  </>
)

export default Home
