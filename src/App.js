import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes/Routes';

function App() {
  return (
    <div className="">
     <RouterProvider routes={router}></RouterProvider>
    </div>
  );
}

export default App;
