// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

import { usePosts } from "./context/post-context";
import Link from "next/link";

export default function Posts() {
  const { posts } = usePosts();

  return (
    <div>
      <div className="p-5 border-2 flex justify-between">
        <h1>Question 4 - Hämta posts från API</h1>
        <Link href="/">Go back</Link>
      </div>
      <h1 className="text-2xl mt-5">Posts</h1>
      {posts.map((post) => {
        return (
          <div className="my-5">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
