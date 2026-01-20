import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import  MovieDetails from './pages/MovieDetails'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mybooking from './pages/Mybooking'
import Seatlayout from './pages/Seatlayout'
import { useLocation } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
// import Notfound from './components/Notfound'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Addshows from './pages/admin/Addshows'
import Listshows from './pages/admin/Listshows'
import Listbooking from './pages/admin/Listbooking'




export default function App() {
  
  let location =useLocation().pathname.startsWith('/admin');

  return (
    
    <>
    <Toaster/>
   

    {!location && <Navbar/>}
     <Routes>
      
      <Route path="/" element={<Home/>} />
      {/* <Route path="/test" element={<SaveUser/>}/> */}
       <Route path="/movies" element={<Movies/>} />
        <Route path="/Movies/:id" element={<MovieDetails/>} />
        <Route path="/Movies/:id/:Date" element={<Seatlayout/>} />
         <Route path="/Mybooking" element={<Mybooking/>} />
          <Route path="/favorites" element={<Favorite/>} />
           {/* <Route path="*" element={<Notfound/>} /> */}
           <Route path='/admin/*' element={<Layout/>}>
           <Route index element={<Dashboard/>}/>
            <Route path="add-shows" element={<Addshows/>} />
             <Route path="list-shows" element={<Listshows/>} />
              <Route path="list-booking" element={<Listbooking/>} />
               
           </Route>

          
     </Routes>
     {!location && <Footer/>}
    </>
    
  )
}


