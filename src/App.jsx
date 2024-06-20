import './App.scss';
import { LoginProvider } from './context/LoginContext';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <div className="app">
      <LoginProvider>
        <AppRouter />
      </LoginProvider>
    </div>
  );
}

export default App;
