import "@/styles/globals.css";

import UserProvider from "./context/post-context";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
