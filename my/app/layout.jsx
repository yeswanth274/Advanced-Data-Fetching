// app/layout.jsx
import Link from 'next/link';

export const metadata = { title: 'Rendering Modes Demo' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
          <Link href="/">Home</Link>{' | '}
          <Link href="/about">About</Link>{' | '}
          <Link href="/news">News (ISR)</Link>{' | '}
          <Link href="/dashboard">Dashboard (SSR)</Link>
        </header>

        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}