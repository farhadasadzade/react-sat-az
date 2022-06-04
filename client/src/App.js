import './App.css';

import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'

//React-router
import { Routes, Route, useLocation } from 'react-router';

//Components
import Header from './Components/Header';
import NewPost from './Components/Pages/NewPost';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import AdminPanel from './Components/Pages/Admin/AdminPanel';



function App() {

  const dispatch = useDispatch()

  const location = useLocation()

  const [user, setUser] = useState(null)


  useEffect(() => {
    dispatch(getPosts(dispatch))
  }, [dispatch])

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])


  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {user && <Route path='/yeni-elan' element={<NewPost />} />}
        <Route path='/daxil-ol' element={<Login />} />
        <Route path='/qeydiyyat' element={<Register />} />
        {user?.result.email === 'f.esedzade9789@gmail.com' && <Route path='/admin-panel' element={<AdminPanel />} />}
      </Routes>
    </div>
  );
}

export default App;
