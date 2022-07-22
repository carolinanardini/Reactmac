import carrito from '../assets/carrito.png';
import './CartWidget.css';


function CartWidget() {
    return (
      <div>
        
            <img src={carrito} className="logoCarrito"/>
     
      </div>
    );
  }

  export default CartWidget;