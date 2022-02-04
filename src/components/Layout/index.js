import * as React from 'react'
import { IconDefinitions } from 'src/components/Icon'
import Header from './Header'
import Footer from './Footer'

type Props = { children: React.Node }

const Layout = (props: Props): React.Node => (
  <>
    <IconDefinitions />
    {/*<Header withHeadline />*/}
    <main className="wrap">{props.children}</main>
    {/*<Footer />*/}
  </>
)

export default Layout
