import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'

class Main extends Component {
    // Enables saving of changed state, such as photo add/delete.  Initial data state is empty.
    constructor(props) {
        super(props)
        console.log('Main constructor()')
    }

    render() {
        console.log('Main render()')
        console.log(this.props)
        return  <div>
                <h1>
                    <Link to="/">Fotomural</Link>
                </h1>
                  {/*Use render if multiple components enclosed for given url. Display
                   Photo Wall if exactly at given path, otherwise multiple pages show up at once.*/}
                   <Route exact path='/' render={() => (
                        <div>
                            {/*Inject posts into Main and pass down array of posts as props using ES6 spread
                               Spread operator passes all posts and dispatches and separates them into
                               individual constructs*/}
                            <PhotoWall {...this.props}/>
                        </div>
                    )}/>

                    {/*Use component when rendering single component only*/}

                    {<Route path='/AddPhoto' render={({history}) => (
                        <AddPhoto {...this.props} onHistory={history}/>
                    )}/>}
                </div>
    }  // render
}  // Main

export default Main