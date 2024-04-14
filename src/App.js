import './App.css';
import AppHeader from './components/AppHeader';
import Inventory from './components/Inventory';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Inventory />
      <Toaster />
    </div>
  );
}

export default App;
