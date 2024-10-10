import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/ui/Header'
import Home from './pages/Home'
import Footer from './components/ui/Footer'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
