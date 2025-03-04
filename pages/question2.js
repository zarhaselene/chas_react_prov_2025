// 2. Shopping cart (3p)
// Visa innehållet i shoppingCart genom att rendera en komponent ShoppingItem
// för varje objekt i shoppingCart.
// ShoppingItem ska visa namnet och priset på varan. amount (antal) ska visas i ett
// input-fält. När man ändrar värdet i input-fältet ska shoppingCart uppdateras
// med det nya värdet.
// Under shoppinglistan ska det stå total price, med det totala priset för alla
// varor i shoppingCart.

import { useState } from "react";

const initialShoppingCart = [
  { name: "Apple", price: 3, amount: 1, id: 1 },
  { name: "Banana", price: 2, amount: 1, id: 2 },
  { name: "Cherry", price: 3, amount: 1, id: 3 },
  { name: "Durian", price: 4, amount: 1, id: 4 },
  { name: "Eggplant", price: 5, amount: 1, id: 5 },
];

export default function Question2() {
  const [shoppingCart, setShoppingCart] = useState(initialShoppingCart);

  return (
    <div>
      <h1>Question 2</h1>
    </div>
  );
}
