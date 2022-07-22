import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../paginas/Home/'
import Sabores from '../paginas/Sabores/'
import Sobre from '../paginas/Sobre/'

export default function rotas() {
 return (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/sabores' element={<Sabores/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
  </BrowserRouter>
 );
}