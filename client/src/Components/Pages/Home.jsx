import React from 'react'
import { useSelector } from 'react-redux'

//Components
import Categories from '../Categories'
import Post from '../Post'

const Home = () => {

  const posts = useSelector(({posts}) => posts)

  return (
    <div>
        <Categories />
        <div className="main">
            <div className="main__products">
                {posts.length > 0 &&
                  posts.map((post) => <Post key={post._id} {...post}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default Home