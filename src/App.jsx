import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Toneri from './pages/Toneri'
import Stampaci from './pages/Stampaci'
import Vage from './pages/Vage'
import Zavese from './pages/Zavese'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toneri" element={<Toneri />} />
          <Route path="/stampaci" element={<Stampaci />} />
          <Route path="/vage" element={<Vage />} />
          <Route path="/zavese" element={<Zavese />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
