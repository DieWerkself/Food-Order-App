import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [actionWithCart, setActionWithCart] = useState(false);

  const showModalHandler = (data) => {
    setActionWithCart(data);
  };

  return (
    <CartProvider>
      {!actionWithCart ? '' : <Cart closeModal={showModalHandler} />}
      <Header showModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
