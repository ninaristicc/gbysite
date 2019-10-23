import React from "react"
import Header from "../components/header"
import PageTransition from 'gatsby-plugin-page-transitions';


export default ({ children }) => (
  <div className="wrap">
    <Header />
    {children}
  </div>
)