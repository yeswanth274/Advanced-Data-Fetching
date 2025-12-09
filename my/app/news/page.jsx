// app/news/page.jsx

// Revalidate every 60 seconds — ISR
export const revalidate = 60;

export default async function News() {
  // Still perform a fetch to demonstrate ISR behavior,
  // but we ignore the data completely.
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  } catch (err) {
    console.error('News fetch failed (ignored):', err);
  }

  return (
    <div>
      <h1>News — Hybrid ISR (revalidate=60)</h1>
      <p>Last rendered: {new Date().toLocaleString()}</p>
    </div>
  );
}