// homepage: static by default if we don't export dynamic or revalidate
export default function Home() {
  return (
    <div>
      <h1>DailyEdge Demo — Homepage (Static)</h1>
      <p>This homepage is statically rendered at build time for fast TTFB.</p>
    </div>
  );
}