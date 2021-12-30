import React, { type Element } from 'react'
import Clipboard from 'clipboard'
import { useRouter } from 'next/router'
import Gitmoji from './Gitmoji'
import Toolbar from './Toolbar'
import useLocalStorage from './hooks/useLocalStorage'
import { groupBy, prop } from 'ramda'

type Props = {
  gitmojis: Array<{
    code: string,
    description: string,
    emoji: string,
    name: string,
  }>,
}

const GitmojiList = (props: Props): Element<'div'> => {
  const router = useRouter()
  const [searchInput, setSearchInput] = React.useState('')
  const [isListMode, setIsListMode] = useLocalStorage('isListMode', true)

  const gitmojis = searchInput
    ? props.gitmojis.filter(({ code, description }) => {
        const lowerCasedSearch = searchInput.toLowerCase()

        return (
          code.includes(lowerCasedSearch) ||
          description.toLowerCase().includes(lowerCasedSearch)
        )
      })
    : props.gitmojis

  const typeList = groupBy(prop('type'), gitmojis)

  React.useEffect(() => {
    if (router.query.search) {
      setSearchInput(router.query.search)
    }
  }, [router.query.search])

  React.useEffect(() => {
    if (router.query.search && !searchInput) {
      router.push('/', undefined, { shallow: true })
    }
  }, [searchInput])

  React.useEffect(() => {
    const clipboard = new Clipboard(
      '.gitmoji-clipboard-emoji, .gitmoji-clipboard-code'
    )

    clipboard.on('success', function (e) {
      window.ga('send', 'event', 'Gitmoji', 'Copy to Clipboard')

      const notification = new window.NotificationFx({
        message: e.trigger.classList.contains('gitmoji-clipboard-emoji')
          ? `<p>Hey! Gitmoji ${e.text} copied to the clipboard 😜</p>`
          : `<p>Hey! Gitmoji <span class="gitmoji-code">${e.text}</span> copied to the clipboard 😜</p>`,
        layout: 'growl',
        effect: 'scale',
        type: 'notice',
        ttl: 2000,
      })

      notification.show()
    })

    return () => clipboard.destroy()
  }, [])

  return (
    <div className="row" id="gitmoji-list">
      <div className="col-xs-12">
        <Toolbar
          isListMode={isListMode}
          searchInput={searchInput}
          setIsListMode={setIsListMode}
          setSearchInput={setSearchInput}
        />
      </div>

      {gitmojis.length === 0 ? (
        <h2>No gitmojis found for search: {searchInput}</h2>
      ) : (
        Object.entries(typeList).map(([type, gitmojis]) => (
          <React.Fragment key={type}>
            <div className="col-xs-12">
              <h2>{type}</h2>
            </div>
            {gitmojis.map((gitmoji, index) => (
              <Gitmoji
                code={gitmoji.code}
                description={gitmoji.description}
                emoji={gitmoji.emoji}
                isListMode={isListMode}
                index={index}
                key={index}
                name={gitmoji.name}
              />
            ))}
          </React.Fragment>
        ))
      )}
    </div>
  )
}

export default GitmojiList
