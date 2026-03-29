import React from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            React Vercel Agents
          </h1>
          <p className="text-gray-600 mt-2">
            Build agentic AI applications with React 19 and Vercel AI SDK
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              ⚡
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              React 19
            </h3>
            <p className="mt-2 text-gray-600">
              Latest React features with Vite for blazing fast development
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
              🤖
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Vercel AI SDK
            </h3>
            <p className="mt-2 text-gray-600">
              Powerful agentic AI capabilities built-in
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
              🔧
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              TypeScript
            </h3>
            <p className="mt-2 text-gray-600">
              Type-safe development for robust applications
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Getting Started
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded">npm install</code></li>
            <li>Configure environment variables in <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code></li>
            <li>Start development: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
            <li>Build your agentic AI application</li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default App;