"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 rounded ">
        <Link className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 mx-1 border-blue-700 border" href={'/home/tasks'}>Create  task</Link>
        <Link className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 mx-1 border-blue-700 border" href={'/home/demo'}>Treat  task</Link>
      </div>
    </div>
  );
}
