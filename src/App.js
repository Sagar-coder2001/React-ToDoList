import './App.css';
import Forminput from './Components/Forminput';
import ToDo from './Components/ToDo';

function App() {
  

  return (
    <div className="wrapper">
    <h1>Todo List</h1>
    <Forminput/>
    <ToDo/>
  </div> 
  );
}

export default App;
