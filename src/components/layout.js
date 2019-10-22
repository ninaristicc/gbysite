import React from "react"
import { Link } from "gatsby"
import { red } from "ansi-colors"
const ListLink = props => (

  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1rem`, backgroundColor: `#D8CEF6`, height: `150vh` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
        <h3 style={{ display: `inline` }}>GetMoney</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)