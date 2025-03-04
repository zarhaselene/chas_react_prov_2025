// 2. Shopping cart (3p)
// Visa innehållet i shoppingCart genom att rendera en komponent Shoppingproduct
// för varje objekt i shoppingCart.
// Shoppingproduct ska visa namnet och priset på varan. amount (antal) ska visas i ett
// input-fält. När man ändrar värdet i input-fältet ska shoppingCart uppdateras
// med det nya värdet.
// Under shoppinglistan ska det stå total price, med det totala priset för alla
// varor i shoppingCart.

import Link from "next/link";
import { useState } from "react";

const initialShoppingCart = [
  { name: "Apple", price: 3, amount: 1, id: 1 },
  { name: "Banana", price: 2, amount: 1, id: 2 },
  { name: "Cherry", price: 3, amount: 1, id: 3 },
  { name: "Durian", price: 4, amount: 1, id: 4 },
  { name: "Eggplant", price: 5, amount: 1, id: 5 },
];

const Shoppingproduct = ({ product, updateQty }) => {
  return (
    <div className="mb-2">
      <p>
        Product: {product.name} - {product.price}kr
      </p>
      <input
        type="number"
        className="border-2"
        value={product.amount}
        onChange={(e) => updateQty(product.id, e.target.value)}
      />
    </div>
  );
};

export default function Question2() {
  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);

  const updateQty = (id, newAmount) => {
    setShoppingCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, amount: newAmount } : product
      )
    );
  };

  const total = shoppingCart.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );
  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 2 - Shopping cart</h1>
        <Link href="/">Go back</Link>
      </div>
      <div className="mt-8">
        {shoppingCart.map((product) => (
          <Shoppingproduct
            key={product.id}
            product={product}
            updateQty={updateQty}
          />
        ))}
        <p className="mt-4 font-bold">Total: {total}kr</p>
      </div>
    </div>
  );
}
