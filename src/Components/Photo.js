import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Photo extends Component {
    render() {
        const post = this.props.post
        console.log('Photo() invoked')
        console.log('Photo render() this.props.post: ' + this.props.post)
        return <figure className="figure">
            {/*Note; single has back ticks (template string), $ denotes parameter(embedded JavaScript expression)*/}
            <Link to={`/single/${post.id}`}> <img className='photo' src={post.imageLink} alt={post.description}/></Link>
        <figcaption><p>{post.description}</p></figcaption>
            <div className = 'button-container'>
                {/*Event handler causes loss of 'this' context in Main.js*/}
                <button onClick={() => {
                    this.props.removePost(this.props.index)   // In actions.js
                    this.props.history.push('/')  // Return to main page from photo page
                }}>Eliminar </button>
                    <Link className = 'button' to = {`/single/${post.id}`}>
                        <div className='comment-count'>
                            <div className={'speech-bubble'}> </div>
                            {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                        </div>
                    </Link>
            </div>
        </figure>
    }
}

export default Photo