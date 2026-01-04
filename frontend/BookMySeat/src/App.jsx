import{Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Movies from './pages/Movies'
import { MovieDetails } from './pages/MovieDetails'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mybooking from './pages/Mybooking'
import Seatlayout from './pages/Seatlayout'
import { useLocation } from 'react-router-dom'
import { Toaster } from "react-hot-toast";


export default function App() {
  let location =useLocation().pathname.startsWith('/admin');

  return (
    
    <>
    <Toaster/>
    {!location && <Navbar/>}
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/Movies" element={<Movies/>} />
        <Route path="/Movies/:id" element={<MovieDetails/>} />
        <Route path="/Movies/:id/:Date" element={<Seatlayout/>} />
         <Route path="/Mybooking" element={<Mybooking/>} />
          <Route path="/Favarite" element={<Favorite/>} />
          
     </Routes>
     {!location && <Footer/>}
    </>
    
  )
}


