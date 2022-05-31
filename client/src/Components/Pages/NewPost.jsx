import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import FileBase from 'react-file-base64'
import { createPost } from '../../redux/actions/posts'



const NewPost = () => {

    const dispatch = useDispatch()

    const [postData, setPostData] = useState({creator: '', name: '', price: '', selectedFile: '', category: 'ev'})

    const handleSubmit = () => {
        dispatch(createPost(postData))
    }

  return (
    <div className="main">
        <div className="new__post">
            <h1>Yeni Elan</h1>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <label htmlFor="name" onChange={(e) => setPostData({...postData, name: e.target.value})}>
                    Elanın adı: <input type="text" name="name"/>
                </label>
                <label htmlFor="price" onChange={(e) => setPostData({...postData, price: e.target.value})}>
                    Qiymət: <input type="text" name="price"/>
                </label>
                <label htmlFor="img">
                    Şəkil: <FileBase type='file' multiple={false} onDone={ ({base64}) => setPostData({...postData, selectedFile: base64})} />
                </label>
                <label htmlFor="category">
                    <select name="category" id="category" onChange={(e) => setPostData({...postData, category: e.target.value})}>
                        <option value="ev">Ev və bağ üçün</option>
                        <option value="neqliyyat">Nəqliyyat</option>
                        <option value="elektronika">Elektronika</option>
                        <option value="eshyalar">Şəxsi əşyalar</option>
                        <option value="xidmet">Xidmət və biznes</option>
                        <option value="hobbi">Hobbi və asudə</option>
                        <option value="idman">İdman</option>
                    </select>
                </label>
                <button type='submit'>Paylaş</button>
            </form>
        </div>
    </div>
  )
}

export default NewPost