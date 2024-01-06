import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import AccountCreationPage from './pages/AccountCreationPage'
import SignInPage from './pages/SignInPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AccountCreationPage />} path="/signup" />
          <Route element={<SignInPage />} path="/signin" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
