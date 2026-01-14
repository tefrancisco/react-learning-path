import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function ProductsPage() {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link key={prod.id} to={`/products/${prod.id}`}>
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
