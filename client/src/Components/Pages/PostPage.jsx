import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {deletePost} from '../../redux/actions/posts'
import { post } from '../../redux/actions/post'

import {useNavigate} from 'react-router'
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const PostPage = () => {
    
    const dispatch = useDispatch()

    const obj = useSelector(({postReducer}) => postReducer.post)

    const user = JSON.parse(localStorage.getItem('profile'))

    const navigate = useNavigate()

    const handleDelete = (id) => {
        dispatch(deletePost(id, navigate))
    }

  return (
    <div className='postpage'>
        <div className="postpage__img">
            <img src={obj?.selectedFile} alt="" />
        </div>
        <div className="postpage__title">
            <div className="postpage__price">
                {obj?.price} AZN
            </div>
            <div className="postpage__name">
                {obj?.name}
            </div>
        </div>
        <div className="postpage__details">
            <div className="postpage__desc">
                <pre>{obj?.description}</pre>
            </div>
        </div>
        <div className="postpage__bottom">
            <div className="postpage__creator">
                Elanın sahibi: <span>{obj?.creatorName}</span>
                <br />
                Əlaqə: <span>{obj?.phone}</span>
            </div>
            {user?.result._id === obj?.creatorId && <FontAwesomeIcon onClick={() => handleDelete(obj._id)} icon={faTrash}/>}
        </div>
    </div>
  )
}

export default PostPage