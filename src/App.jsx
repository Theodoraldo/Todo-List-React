import Navbar from './components/Navbar';
import TodoApp from './components/ToDoApp';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="appbody">
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
