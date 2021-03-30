import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components'
import AppRouter from './components/AppRouter'
function App() {
  return (
    <>
    <BrowserRouter>
      <AppRouter />
      <Navbar />
    </BrowserRouter>
    </>
  );
}

export default App;
