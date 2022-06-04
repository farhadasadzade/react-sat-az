import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLoaded } from '../../redux/actions/posts'
import { getPosts } from '../../redux/actions/posts'

import ContentLoader from "react-content-loader"

//Components
import Categories from '../Categories'
import Post from '../Post'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoaded(false))
    dispatch(getPosts())
  }, [dispatch])

  const isLoaded = useSelector(({posts}) => posts.isLoaded)
  const posts = useSelector(({posts}) => posts.posts)

  const loadingBlocks = Array(12).fill(0)
  
  return (
    <div>
        <Categories />
        <div className="main">
            <div className="main__products">
                {isLoaded ? 
                    posts &&
                      posts.map((post) => <Post key={post._id} {...post}/>)
                    : loadingBlocks.map((item, index) => <ContentLoader key={index}
                    speed={1}
                    width={250}
                    height={277}
                    viewBox="0 0 250 277"
                    backgroundColor="#cfcfcf"
                    foregroundColor="#bababa"
                  >
                    <rect x="0" y="0" rx="10" ry="10" width="250" height="277" /> 
                    <rect x="16" y="153" rx="0" ry="0" width="107" height="27" />
                  </ContentLoader>)
                   }
            </div>
        </div>
    </div>
  )
}

export default Home