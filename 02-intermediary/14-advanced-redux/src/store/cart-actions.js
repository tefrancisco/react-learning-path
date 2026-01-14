import { uiActions } from "./ui-slice";
import { cartActions } from './cart-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://9000-firebase-redux-1768085777376.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData))

    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://9000-firebase-redux-1768085777376.cluster-xvr5pmatm5a4gx76fmat6kxt6o.cloudworkstations.dev/.json",
        {
          // Put will overwrite the existing data with the new one.
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
