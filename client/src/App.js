import './App.css';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts'

//React-router
import { Routes, Route } from 'react-router';

//Components
import Header from './Components/Header';
import NewPost from './Components/Pages/NewPost';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts(dispatch))
  }, [dispatch])

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/yeni-elan' element={<NewPost />} />
        <Route path='/daxil-ol' element={<Login />} />
        <Route path='/qeydiyyat' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
