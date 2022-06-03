import Ways from './routes';
import GlobalStyle from './styles/global';
import {BrowserRouter as Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
    <Route>
      <GlobalStyle />
      <Navbar />
      <Ways />
    </Route>
  </>
  );
}

export default App;
