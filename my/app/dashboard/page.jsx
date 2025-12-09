// app/dashboard/page.jsx

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  // still doing SSR fetch to demonstrate dynamic rendering
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' });
  } catch (err) {
    console.error('Fetch failed (ignored):', err);
  }

  return (
    <div>
      <h1>Dashboard — Server Side Rendered (SSR)</h1>
      <p>Fetched at: {new Date().toLocaleString()}</p>
    </div>
  );
}