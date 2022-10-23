import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import s from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const closeButtonHandler = () => {
    props.closeModal(false);
  };

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const addToCartHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const removeToCartHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItems = (
    <ul className={s['cart-items']}>
      {ctx.items.map((i) => (
        <li>
          <CartItem
            key={i.id}
            name={i.name}
            amount={i.amount}
            price={i.price}
            onAdd={addToCartHandler.bind(null, i)}
            onRemove={removeToCartHandler.bind(null, i.id)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <Modal closeModal={props.closeModal}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={s.actions}>
        <button onClick={closeButtonHandler} className={s['button--alt']}>
          Close
        </button>
        {ctx.items.length > 0 && <button className={s.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
