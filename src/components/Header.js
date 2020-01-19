import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header>
      <div>
        <h1>carl-w.</h1>
        <ul>
          <li>
            <Link to="/" className={headerStyles.link}>
              home.
            </Link>
          </li>
          <li>
            <Link to="/about">about.</Link>
          </li>
          <li>
            <Link to="/blog">blog.</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
