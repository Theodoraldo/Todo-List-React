import './App.css';
import Navbar from './components/Navbar';
import TodoApp from './components/ToDoApp';

function App() {
  return (
    <div className="appbody">
      <Navbar />
      <TodoApp />
    </div>
  );
}

export default App;
