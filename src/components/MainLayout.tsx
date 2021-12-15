import * as React from "react"

import Header from "./Header"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
