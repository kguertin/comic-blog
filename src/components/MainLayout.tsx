import * as React from "react"
import Footer from "./Footer"

import Header from "./Header/Header"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
