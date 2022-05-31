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
      </Routes>
    </div>
  );
}

export default App;
