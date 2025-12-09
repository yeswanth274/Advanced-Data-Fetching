// static: no export dynamic and revalidate = false
export const revalidate = false;

export default function About() {
  return (
    <div>
      <h1>About — Static Page (SSG)</h1>
      <p>Rendered at build time. Great for marketing pages & docs.</p>
    </div>
  );
}