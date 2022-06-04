import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { deleteAdminPost, fetchAdminPosts } from '../../../redux/actions/adminPostsItems'
import { sendPost } from '../../../redux/actions/posts'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const AdminPosts = () => {

  const dispatch = useDispatch()

  const uncheckedPosts = useSelector(({adminPostsItems}) => adminPostsItems.adminPosts)

  useEffect(() => {
    dispatch(fetchAdminPosts())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteAdminPost(id))
  }

  const handleSend = (obj) => {
    dispatch(sendPost({...obj, createdAt: new Date().toJSON()}))
    handleDelete(obj._id)
  }

  return (
    <div className='admin__posts'>
      <h1>Yoxlanılmamış elanlar</h1>
        <ul className="admin__posts-list">
            {uncheckedPosts.length > 0 && 
              uncheckedPosts.map((item) => {
                return <li key={item._id} className="admin__posts-item">
                <div className="post__item-desc">
                  <div className="post__item-img">
                    <img src={item.selectedFile} alt="" />
                  </div>
                  <h2>{item.name}</h2>
                </div>
                <div className="post__item-links">
                  <FontAwesomeIcon icon={faCircleCheck} onClick={() => handleSend(item)}/>
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item._id)}/>
                </div>
            </li>
              })
            }
        </ul>
    </div>
  )
}

export default AdminPosts