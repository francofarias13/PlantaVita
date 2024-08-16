
import './navBar.css'
import logo from '../../assets/Logotipo_para_vivero_ilustrado_verde-removebg-preview.png'
import { CartWidget } from './CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav>
    <img src={logo} alt='logo-plantavita' />
    <h1>PlantaVita</h1>
    <div>
        <button>Interior</button>
        <button>Exterior</button>
    </div>
    <CartWidget />
    </nav>
  )
}
