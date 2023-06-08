// import Container from 'react-bootstrap/Container';
import DashBoard from './pages/DashBoard/DashBoard'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import CardContent from './pages/CardContent/CardContent';
import { Header } from './components/Header';


function App() {
  
  return (
    <div class='page'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}/>
          <Route path='/events/:eventId' element={<CardContent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
