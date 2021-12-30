// @flow
import React, { type Element } from 'react'

import Button from 'src/components/Button'
import Logo from './Logo'
import styles from './styles.module.css'

type Props = { withHeadline: boolean }

const Header = (props: Props): Element<'header'> => (
  <header className={styles.header}>
    <Logo />
    {props.withHeadline && (
      <h2 className={styles.title}>An emoji guide for your commit messages</h2>
    )}
  </header>
)

export default Header
