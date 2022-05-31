import React from 'react'

const Post = ({name, price, selectedFile}) => {
  return (
    <div>
        <div className="main__products-item">
            <img src={selectedFile} alt="product" />
            <h1>{price} AZN</h1>
            <h2>{name}</h2>
            <p>Maqa</p>
        </div>
    </div>
  )
}

export default Post