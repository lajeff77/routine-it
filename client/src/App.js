import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import AccountCreationPage from './pages/AccountCreationPage'
import SignInPage from './pages/SignInPage'
import MyDashboardPage from './pages/MyDashboardPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AccountCreationPage />} path="/signup" />
          <Route element={<SignInPage />} path="/signin" />
          <Route element={<MyDashboardPage/>} path="/mydashboard" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
