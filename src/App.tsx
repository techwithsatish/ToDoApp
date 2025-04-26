import './App.css'
import { dummyData } from './data/todos'
import './index.css'

function App() {


  return (
    <main className='py-10 h-screen bg-black text-white'>
      <h1 className='font-bold text-3xl text-center'>
        Your ToDos
      </h1>
      <div className='max-w-lg mx-auto'>
        <div className='space-y-2'>
          {dummyData.map(todo => (
            <p key={todo.id} className='text-lg'>
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
