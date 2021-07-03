import React, {Component} from 'react'

class Photo extends Component {
    render() {
        const post = this.props.post
        console.log('Photo() invoked')
        return <figure className="figure">
            <img className='photo' src={post.imageLink} alt={post.description}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className = 'button-container'>
                {/*Event handler causes loss of 'this' context in Main.js*/}
                <button onClick={() => {
                    this.props.removePost(this.props.index)
                }}>Eliminar</button>
            </div>
        </figure>
    }
}

export default Photo