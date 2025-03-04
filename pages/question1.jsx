// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.

import { useState } from "react";
import Link from "next/link";

export default function Question1() {
  const [isVisible, setIsVisibe] = useState(false);

  const showPopup = () => {
    setIsVisibe(true);
  };
  const hidePopup = () => {
    setIsVisibe(false);
  };

  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 1 - Popup</h1>
        <Link href="/">Go back</Link>
      </div>
      <div>
        <button className="p-2 border-2" onClick={showPopup}>
          Visa
        </button>
      </div>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white p-8 flex justify-between items-center w-72">
            <h1 className="font-bold">En popup</h1>
            <button className="p-2 border-2" onClick={hidePopup}>
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
