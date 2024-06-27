import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
