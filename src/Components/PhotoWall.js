import React, {Component} from 'react'
import Photo from './Photo'
import {Link} from 'react-router-dom'

class PhotoWall extends Component {
    // Enables saving of changed state, such as photo add/delete.  Initial data state is empty.
    render() {
        return  <div>
                    {/*Button - Link talks with Browser Router so back button works*/}
                    <Link to='AddPhoto' className='addIcon'> </Link>
                    {/* This works: <a onClick={this.props.onNavigate} href='#AddPhoto' className='addIcon'> </a>*/}
                    {/* This works: <button onClick={this.props.onNavigate} className='addIcon'> </button>*/}
                    {/* Props:
                        - index: added for remove photo action*/}
                    <div className='photoGrid'>
                        {   this.props.posts
                            .sort(function(x,y) {
                                return y.id - x.id
                            })
                            .map((post, index) => <Photo key={index} post={post} {...this.props} index={index}/>)
                         }
                     </div>
                </div>
    }
}

export default PhotoWall