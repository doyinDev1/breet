import { Toaster } from 'react-hot-toast';
import './App.css';
import Dashboard from './layout/Dashboard';
function App() {
  return (
    <>

      <div className="app">
        <Dashboard />
      </div>
      <div><Toaster /></div>
    </>
  );
}

export default App;
