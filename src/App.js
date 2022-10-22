import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [actionWithCart, setActionWithCart] = useState(false);

  const showModalHandler = (data) => {
    setActionWithCart(data);
  };

  return (
    <>
      {!actionWithCart ? '' : <Cart closeModal={showModalHandler} />}
      <Header showModal={showModalHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
