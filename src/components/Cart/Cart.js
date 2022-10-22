import Modal from '../UI/Modal';
import s from './Cart.module.css';

const Cart = (props) => {
  const closeButtonHandler = () => {
    props.closeModal(false);
  };

  const cartItems = (
    <ul className={s['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal closeModal={props.closeModal}>
      {cartItems}
      <div className={s.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={s.actions}>
        <button onClick={closeButtonHandler} className={s['button--alt']}>
          Close
        </button>
        <button className={s.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
