import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
import Todos from './MyComponents/Todos';


function App() {
  let todos = [
    {
      id: 1,
      title: "Goto School",
      completed: false},
    {
      id: 2,
      title: "Complete the Binary Tree lecture",
      completed: true},
    {
      id: 3,
      title: "Complete the React tutorial",
      completed: false
    }
    
  ]

  return (
    <>
      <Header title="My Todo List"/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
