import './App.css';
import AppHeader from './components/AppHeader';
import Inventory from './components/Inventory';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';
import CartList from './components/CartList';
import ConfirmedOrders from './components/ConfirmedOrders';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<AppHeader/>}>
    <Route path="/" element={<Inventory/>}/> 
    <Route path="/cart" element ={<CartList/>}/>
    <Route path="/confirmed-purchases" element ={<ConfirmedOrders/>}/>
    </Route>
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      <AppHeader />
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
