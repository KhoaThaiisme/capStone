import Container from 'react-bootstrap/Container';
import DashBoard from './pages/DashBoard/DashBoard'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import CardContent from './pages/CardContent/CardContent';


function App() {
  
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}/>
          <Route path='/events/:eventId' element={<CardContent />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
