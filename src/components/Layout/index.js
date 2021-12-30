import * as React from 'react'
import { IconDefinitions } from 'src/components/Icon'
import Header from './Header'

type Props = { children: React.Node }

const Layout = (props: Props): React.Node => (
  <>
    <IconDefinitions />
    <Header withHeadline />
    <main className="wrap">{props.children}</main>
  </>
)

export default Layout
