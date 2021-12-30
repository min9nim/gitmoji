import React, { type Element } from 'react'
import Icon from 'src/components/Icon'
import styles from './styles.module.css'
import { DATA_SOURCE_LOCATION } from '../../../constants'

const Footer = (): Element<'footer'> => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className="row middle-xs">
        <div className={`col-sm-6 ${styles.madeWithLove}`}>
          <a href="https://github.com/min9nim/gitmoji">
            <b>This</b>
          </a>{' '}
          is forked from{' '}
          <a href="https://github.com/carloscuesta/gitmoji">
            <b>gitmoji</b>
          </a>
          <Icon name="heart" />
        </div>
        <div className={`col-sm-6 ${styles.footerNav}`}>
          <nav>
            <a href={DATA_SOURCE_LOCATION}>
              <b>Gitmojis data from..</b>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
