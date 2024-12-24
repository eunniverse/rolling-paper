import Link from 'next/link';

export default function HomePage() {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-6">Rolling Paper</h1>
        <Link href="/create">
          {/*<a className="bg-blue-500 text-white px-4 py-2 rounded shadow mb-4">Create New Paper</a>*/}
        </Link>
        <Link href="/view">
          {/*<a className="bg-green-500 text-white px-4 py-2 rounded shadow">View Papers</a>*/}
        </Link>
      </div>
  );
}
