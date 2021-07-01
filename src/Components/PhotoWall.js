import React, {Component} from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
    // Enables saving of changed state, such as photo add/delete.  Initial data state is empty.
    render() {
    return  <div>
                {/*Button - Link talks with Browser Router so back button works*/}
                <Link to='AddPhoto' className='addIcon'> </Link>
                {/* This works: <a onClick={this.props.onNavigate} href='#AddPhoto' className='addIcon'> </a>*/}
                {/* This works: <button onClick={this.props.onNavigate} className='addIcon'> </button>*/}
                <div className='photoGrid'>
                    {   this.props.posts.map((post, index) =>
                            <Photo key={index} post={post} onRemovePhoto={this.props.onRemovePhoto}/>)
                    }
                </div>
            </div>
    }
}



// Make passed parameters and types required
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall