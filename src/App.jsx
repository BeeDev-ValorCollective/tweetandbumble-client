import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>

          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
