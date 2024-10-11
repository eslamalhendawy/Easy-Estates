import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/ui/Header'
import Home from './pages/Home'
import Footer from './components/ui/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
