
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import { Provider } from 'react-redux';
import store from './store/store';
import AboutPage from './views/AboutPage';
import LikeDislikeSelectionPage from './views/LikeDislikeSelectionPage';
import UsersPage from './views/UsersPage';
import SingleUsersPage from './views/SingleUserPage';
function App() {
  return (
    
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/like-dislike" element={<LikeDislikeSelectionPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<SingleUsersPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
