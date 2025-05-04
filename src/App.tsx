import './App.css'
import Todos from "./components/Todos";
import Counter from './components/Counter';


function App() {
  return (
    <div className='container'>
        <div className="layout">
          <Todos todosTitle={'All TODO'}/>
          <Todos todosTitle={'Now'}/>
          <Todos todosTitle={'Today'}/>
          <Counter/>
        </div>

    </div>
  )
}

export default App
