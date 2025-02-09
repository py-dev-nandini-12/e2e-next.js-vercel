import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Next.js + Playwright</h1>
      <Link href="/form">Go to Form</Link>
    </div>
  );
}
