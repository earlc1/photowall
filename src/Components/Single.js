import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() {
        const {match, posts} = this.props
        console.log(`Single render(): ${match.params.id}`)
        console.log('Single render(): ' + posts)
        const id = Number(match.params.id)
        const post = posts.find((post) => Number(post.id) === id)
        const comments = this.props.comments[match.params.id] || []  // Comments in redux store
        const index = this.props.posts.findIndex((post) => Number(post.id) === id)
        return  <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments addComment={this.props.addComment} comments={comments} id = {id}/>
                </div>
        }
}

export default Single