import React from "react"
import Header from "../components/Header"

export default ({ children }) => (
  <div className="wrap">
    <Header />
    {children}
  </div>
)