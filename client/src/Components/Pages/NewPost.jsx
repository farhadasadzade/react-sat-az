import React, { useState } from 'react'

import {useDispatch} from 'react-redux'

import FileBase from 'react-file-base64'
import { createPost } from '../../redux/actions/posts'



const NewPost = () => {

    const dispatch = useDispatch()

    const [postData, setPostData] = useState({creator: '', name: '', price: '', description: '', selectedFile: '', category: 'ev', phone: '', createdAt: new Date().toJSON()})

    const handleSubmit = (e) => {
        dispatch(createPost(postData))
    }

  return (
    <div className="main">
        <div className="new__post">
            <h1>Yeni Elan</h1>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <label htmlFor="name" onChange={(e) => setPostData({...postData, name: e.target.value, createdAt: new Date().toJSON()})}>
                    Elanın adı: <input type="text" name="name"/>
                </label>
                <label htmlFor="price" onChange={(e) => setPostData({...postData, price: e.target.value, createdAt: new Date().toJSON()})}>
                    Qiymət: <input type="text" name="price"/>
                </label>
                <label htmlFor="desc">
                    Haqqında: <textarea name="desc" rows="5" onChange={(e) => setPostData({...postData, description: `<pre>${e.target.value}</pre>`, createdAt: new Date().toJSON()})}></textarea>
                </label>
                <label htmlFor="img">
                    Şəkil: <FileBase type='file' multiple={false} onDone={ ({base64}) => setPostData({...postData, selectedFile: base64, createdAt: new Date().toJSON()})} />
                </label>
                <label htmlFor="category">
                    Kateqoriya: <br />
                    <select name="category" id="category" onChange={(e) => setPostData({...postData, category: e.target.value, createdAt: new Date().toJSON()})}>
                        <option value="ev">Ev və bağ üçün</option>
                        <option value="neqliyyat">Nəqliyyat</option>
                        <option value="elektronika">Elektronika</option>
                        <option value="eshyalar">Şəxsi əşyalar</option>
                        <option value="xidmet">Xidmət və biznes</option>
                        <option value="hobbi">Hobbi və asudə</option>
                        <option value="idman">İdman</option>
                    </select>
                </label>
                <label htmlFor="tel">
                    Əlaqə nömrəsi: <input type="tel" name="tel" onChange={(e) => setPostData({...postData, phone: e.target.value, createdAt: new Date().toJSON()})}/>
                </label>
                <button type='submit'>Paylaş</button>
            </form>
        </div>
    </div>
  )
}

export default NewPost