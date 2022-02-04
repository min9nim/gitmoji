import React, { type Element } from 'react'
import emojiColorsMap from '../emojiColorsMap'
import styles from './styles.module.css'

type Props = {
  code: string,
  description: string,
  emoji: string,
  isListMode: boolean,
}

const Gitmoji = (props: Props): Element<'article'> => {
  return (
    <article
      style={{ '--emojiColor': emojiColorsMap[props.index] }}
      className={`${styles.emoji} col-xs-12 col-sm-6 ${
        props.isListMode ? 'col-md-4' : 'col-md-3'
      }`}
    >
      <div
        className={`${styles.card} ${props.isListMode ? styles.cardList : ''}`}
      >
        <header className={`${styles.cardHeader}`}>
          <button
            type="button"
            className={`gitmoji-clipboard-emoji ${styles.gitmoji}`}
            data-clipboard-text={props.emoji + ' ' + props.description}
          >
            {props.emoji}
          </button>
        </header>
        <div className={styles.gitmojiInfo}>
          <button
            className={`gitmoji-clipboard-code ${styles.gitmojiCode}`}
            data-clipboard-text={props.code + ' ' + props.description}
            tabIndex="-1"
            type="button"
          >
            <code style={{ fontSize: 14 }}>{props.code}</code>
          </button>
          <p>{props.description}</p>
        </div>
      </div>
    </article>
  )
}

export default Gitmoji
