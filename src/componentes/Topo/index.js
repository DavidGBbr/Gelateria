import {Link} from 'react-router-dom';
import './style.css'

export default function Topo() {
 return (
   <header>
    <div className='limitar-secao'>
        <img src='./assets/logo.png' alt='Logomarca'/>

        <nav>
            <Link className='link-topo' to='/'>Home</Link>
            <Link className='link-topo' to='/sabores'>Sabores</Link>
            <Link className='link-topo' to='/sobre'>Sobre</Link>
        </nav>
    </div>
   </header>
 );
}