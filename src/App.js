import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Counter initialCount={42} />
      <Counter initialCount={10} />
      <Counter initialCount={0} />
      <Counter initialCount={-42} />
    </div>
    
  );
}

export default App;
