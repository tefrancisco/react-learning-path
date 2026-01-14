import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import { fetchCartData, sendCardData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // useSelector() sets up a connection between the store and this component, so whenever the
  // store changes, this component gets re-executed.
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // async function sendCartData() {
    //   dispatch(uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data.'
    //   }))

    //   const response = await fetch('https://9000-firebase-redux-1768085777376.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/.json',
    //   {
    //     // Put will overwrite the existing data with the new one.
    //   method: 'PUT',
    //   body: JSON.stringify(cart)
    // })

    // if (!response.ok) {
    //   throw new Error('Sending cart data failed.')
    // }

    // dispatch(uiActions.showNotification({
    //     status: 'success',
    //     title: 'Success!',
    //     message: 'Sent cart data successfully'
    //   }))

    // }

    //      sendCartData().catch(error => {
    //       dispatch(uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!!',
    //       message: 'Sending cart data failed!'
    //     }))
    //     })

    // Prevents sending cart data the first time the App loads.
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCardData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
