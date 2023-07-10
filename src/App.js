import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrders from "./features/user/components/UserOrders";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfile from "./features/user/components/UserProfile";
import Logout from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/orders",
    element: <UserOrdersPage></UserOrdersPage>,
  },
  {
    path: "/profile",
    element: <UserProfilePage></UserProfilePage>,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch(); //The useDispatch hook is used to access the Redux dispatch function. It allows you to dispatch actions to the Redux store.
  const user = useSelector(selectLoggedInUser); //The useSelector hook is used to select and retrieve data from the Redux store. In this case, it is selecting the loggedInUser from the store using the selectLoggedInUser selector.

  useEffect(() => {
    //The useEffect hook is utilized to handle side effects in the component. It runs a callback function when certain dependencies change.  In this code, it runs when the user object changes.
    if (user) {
      //This checks if the user object exists or is truthy.
      dispatch(fetchItemsByUserIdAsync(user.id)); //If the user object exists, the code dispatches an action called fetchItemsByUserIdAsync with the user.id as an argument. This action is likely defined elsewhere and is responsible for fetching items associated with the logged-in user.
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]); // The dependencies array [dispatch, user] is provided to the useEffect hook, which means the effect will only re-run if either the dispatch function or the user object changes.

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
} // Overall, this code suggests that the component is responsible for rendering the main structure of the application and initiating an API call to fetch items based on the logged-in user when the user object is available.

export default App;
