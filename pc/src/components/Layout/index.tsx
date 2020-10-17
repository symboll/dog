import React from "react"

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

interface IProps {
  children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
        {children}
      <Footer />
    </>
  )
}
export default Layout
