import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import Photo from './components/Photo/Photo';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/user';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main className='AppBody'>
          <Routes>
            <Route path='/projeto-dogs/' element={<Home />} />
            <Route path='/projeto-dogs/login/*' element={<Login />} />
            <Route 
              path='/projeto-dogs/conta/*' 
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              } 
            />
            <Route path='/projeto-dogs/foto/:id' element={<Photo />} />
            <Route path='/projeto-dogs/perfil/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
