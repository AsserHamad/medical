import './App.css';
import { AppContextProvider } from './contexts/AppContext';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}

export default App;
