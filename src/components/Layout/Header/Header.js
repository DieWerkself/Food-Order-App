import headImage from '../../../assets/meals.jpg';
import HeaderCartButton from './CartButton';
import s from './Header.module.css';

const Header = (props) => {
  const cartButtonHandler = () => {
    props.showModal(true);
  };

  return (
    <>
      <header className={s.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton action={cartButtonHandler} />
      </header>
      <div className={s['main-image']}>
        <img src={headImage} alt="Head"></img>
      </div>
    </>
  );
};

export default Header;
