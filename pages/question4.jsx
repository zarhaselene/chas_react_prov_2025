// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

import { usePosts } from "./context/post-context";
import Link from "next/link";
import { useEffect } from "react";

export default function Question4() {
  const { setPosts } = usePosts();

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 4 - Hämta posts från API</h1>
        <Link href="/">Go back</Link>
      </div>
      <div>
        <Link href={"/posts"}>Posts</Link>
      </div>
    </div>
  );
}
