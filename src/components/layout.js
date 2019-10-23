import React from "react"
import Header from "./Header"
import PageTransition from 'gatsby-plugin-page-transitions';


export default ({ children }) => (
  <div className="wrap">
    <Header />
    {children}
  </div>
)