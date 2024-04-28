import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogdetail} = props
  const {id, title, imageUrl, avatarUrl, author} = blogdetail
  console.log(title)
  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />

          <div className="item-info">
            <p className="item-title">{title}</p>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
