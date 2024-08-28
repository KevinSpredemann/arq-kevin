import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SpinnerLoading from './components/SpinnerLoading/SpinnerLoading'

// Utils 
import ScrollToTop from './utils/ScrolltoTop.jsx'
import { AppContext } from './contexts/AppContext'

function App() {
  
  const appContext = useContext(AppContext)

  if(appContext.loading){
    return <SpinnerLoading />
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
