import './App.css'
import TodoItem from './components/TodoItem'
import { dummyData } from './data/todos'
import './index.css'

function App() {
  {/* can put for loop here in{} */}
  function setTodoCompleted(id: number, completed: boolean){
    alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
  }

  return (

    <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center'>
        Your ToDos
      </h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
        <div className='space-y-2'>
          {dummyData.map(todo => (
            <TodoItem 
            key={todo.id}
            todo={todo}
            onCompletedChange={setTodoCompleted}
            />
          ))}
          {/* cannot put for loop in {} because it donot return value */}
        </div>
      </div>
    </main>
  )
}

export default App
