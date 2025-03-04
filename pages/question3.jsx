// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.

// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".

import { useState } from "react";
import Link from "next/link";

export default function Question3() {
  const [isButton1Open, setIsButton1Open] = useState(false);
  const [isButton2Open, setIsButton2Open] = useState(false);

  const Button = ({ title }) => {
    return (
      <button
        onClick={() => setIsButton1Open(true)}
        className="border-2 p-2 hover:bg-slate-100"
      >
        {title}
      </button>
    );
  };

  const ButtonWithChildren = ({ children }) => {
    return (
      <button
        onClick={() => setIsButton2Open(true)}
        className="border-2 p-2 hover:bg-slate-100"
      >
        {children}
      </button>
    );
  };

  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 3 - Buttons</h1>
        <Link href="/">Go back</Link>
      </div>
      <div className="mt-8">
        <div>
          <Button title="Click Me" />
          {isButton1Open && <p className="mt-2">klick på Button</p>}
        </div>
        <div>
          <ButtonWithChildren>Click Me</ButtonWithChildren>
          {isButton2Open && <p className="mt-2">klick på ButtonWithChildren</p>}
        </div>
      </div>
    </div>
  );
}
