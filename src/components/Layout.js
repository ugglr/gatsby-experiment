import React from "react"
import Header from "./Header"
import Footer from "./Footer"

//Normalize
import "../styles/normalize.css"
// General styles
import "../styles/core.scss"
// Layout CSS module import
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
