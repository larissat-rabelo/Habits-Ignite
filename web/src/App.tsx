import Habit from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Habit completed={4} />
      <Habit completed={40} />
    </div>
  )
}

export default App
