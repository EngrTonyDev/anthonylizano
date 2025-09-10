import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Tailwind is working ✅</h1>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
        <div className="flex gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="group">
            <img
              src={viteLogo}
              className="w-24 h-24 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" className="group">
            <img
              src={reactLogo}
              className="w-24 h-24 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Vite + <span className="text-indigo-600">React</span>
        </h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md w-full transition-all hover:shadow-2xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg mb-6 transition-all hover:from-indigo-600 hover:to-purple-700 active:scale-95 shadow-md"
          >
            Count is <span className="text-2xl font-bold">{count}</span>
          </button>
          <p className="text-gray-600 text-center">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 text-center max-w-md">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
