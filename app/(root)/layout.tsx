import React, { Children } from 'react'
import Footer from "@/components/footer";
import Header from "@/components/header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout