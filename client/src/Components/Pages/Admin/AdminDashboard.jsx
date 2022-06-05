import React from 'react'

import { useSelector } from 'react-redux'

const AdminDashboard = () => {

  const items = useSelector(({adminPostsItems}) => adminPostsItems.items)
  const posts = useSelector(({posts}) => posts.posts.length)

  return (
    <div className='admindash'>
        <div className="admindash-item">
            Yoxlanılmış Elanlar <br /> <span>{posts}</span>
        </div>
        <div className="admindash-item">
            Yoxlanılmamış Elanlar  <br /> <span>{items}</span> 
        </div>
    </div>
  )
}

export default AdminDashboard