import React from 'react'
import { Button } from './components/ui/button'
import AppRouter from './components/AppRouter'
import Header from './components/custom/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <AppRouter/>
    </div>
  )
}

export default App
