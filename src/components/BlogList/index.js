import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/TailSpin'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoader: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogList: updateData, isLoader: false})
  }

  render() {
    const {blogList, isLoader} = this.state
    console.log(blogList)
    return (
      <div>
        <h1>Blogs</h1>
        <div className="listcontainer">
          {isLoader ? (
            <Loader color="red" type="TailSpin" height={50} width={50} />
          ) : (
            blogList.map(eachItem => <BlogItem blogdetail={eachItem} />)
          )}
        </div>
      </div>
    )
  }
}
export default BlogList
