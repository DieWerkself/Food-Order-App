import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import s from './CartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const numberOfCartItems = items.reduce((cn, i) => {
    return cn + i.amount;
  }, 0);

  const btnClasses = `${s.button} ${btnIsHighlighted ? s.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.action} className={btnClasses}>
      <span className={s.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={s.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
