import CartIcon from '../../Cart/CartIcon';
import s from './CartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.action} className={s.button}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
