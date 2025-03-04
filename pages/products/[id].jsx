// Om man klickar på ett smycke visas dess detaljsida.
// Där kan man se title, description och image (i orginal-storlek).

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  async function getProduct() {
    if (!id) return;

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      if (response.ok) {
        setProduct(data);
      } else {
        throw new Error("Failed to fetch product");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div>
        <div className="p-5 border-2 flex justify-between">
          <h1>Question 6 - Jewelery store</h1>
          <Link href="/">Go back</Link>
        </div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 6 - Jewelery store</h1>
        <Link href="/">Go back</Link>
      </div>

      <h2 className="text-xl">{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} width="800" alt={product.title} />
    </div>
  );
}
