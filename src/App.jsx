import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'

import Home from './views/Home'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
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
