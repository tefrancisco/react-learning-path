import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from './pages/Error'
import ProductDetailPage from './pages/ProductDetail'

const router = createBrowserRouter([
  // You can return JSX code at the object element property too.
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <Home /> },
      // the index prop define this route as the index, root one
      { index: true, element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
      // Dynamic path after :
      { path: "/products/:productId", element: <ProductDetailPage /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
