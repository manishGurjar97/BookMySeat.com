
import toast from 'react-hot-toast'
const Notfound = () => {
    let error =  toast("page not found ")
  return (
    
    <div><h1>{error}</h1></div>
  )
}

export default Notfound