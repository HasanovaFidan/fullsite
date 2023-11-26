
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { RouterProvider } from 'react-router';
import ROOT, { ADMIN_ROOT } from './Router/index.routes';

function App() {
  const root = createBrowserRouter(ROOT)
  return (
    <div className="App">
      <RouterProvider router={root} />
    </div>
  );
}

export default App;
